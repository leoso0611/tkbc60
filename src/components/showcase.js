import PropTypes from "prop-types";
import Close from "images/icon/close.svg";

import { returnTitle } from "helpers/showcaseTypeHelper";

function Showcase({ item, setOpen, typeTitle }) {
  const { author_name, description, source, type } = item;
  const handleModalClose = () => {
    setOpen(false);
  };
  return (
    <div className="bg-secondary w-full h-full md:p-8 p-4">
      <div className="w-full flex justify-end">
        <button
          onClick={handleModalClose}
          className="hover:bg-gray-300 rounded-full w-8 h-8 flex justify-center items-center"
        >
          <img src={Close} alt="close" className="w-6 h-6" />
        </button>
      </div>
      <div className="flex md:flex-row flex-col h-[90%]">
        <div className="md:flex-[2]">
          {item.type !== "sound" ? (
            <img
              src={source}
              alt="show"
              className="h-full object-contain object-left-top"
            />
          ) : null}
        </div>
        <div className="md:flex-1 px-6 py-10">
          <div>{returnTitle(type)}</div>
          <div>{author_name}</div>
          <div>
            作品概念
            <div>
              {description.split("\n").map((str) => (
                <div>{str}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Showcase.propTypes = {
  item: PropTypes.object,
  setOpen: PropTypes.func,
};

export default Showcase;
