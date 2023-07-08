import PropTypes from "prop-types";
import Close from "images/icon/close.svg";
import Clip from "images/icon/yellow_clip.png";
import Player from "./player";

import { returnTitle } from "helpers/showcaseTypeHelper";

function Showcase({ item, setOpen, open }) {
  const { author_name, description, source, type } = item;
  const handleModalClose = () => {
    setOpen(false);
  };
  return (
    <div className="bg-secondary w-full h-full md:p-8 p-4 no-scrollbar overflow-scroll relative">
      <button
          onClick={handleModalClose}
          className="hover:bg-gray-300 rounded-full w-8 h-8 flex justify-center items-center absolute right-8"
        >
          <img src={Close} alt="close" className="w-6 h-6" />
        </button>
      <div className="flex md:flex-row flex-col h-full md:mt-0 mt-3">
        <div className="md:flex-[2] md:flex md:items-center">
          {item.type !== "sound" ? (
            <img
              src={source}
              alt="show"
              className="h-full object-contain"
            />
          ) : <Player item={item} open={open}/>}
        </div>

        <div className="md:flex-1 md:px-6 md:py-10 px-0 py-0 md:mt-0 mt-6 md:flex md:flex-col md:justify-start md:justify-center">
          <div className="flex items-center">
            <img src={Clip} alt="clip" className="w-10"/> {/* TODO: switch type => different clip color */}
            {returnTitle(type)}
          </div>
          <div className="mt-4 font-bold text-2xl">{author_name}</div>
          <div className="mt-4 font-bold text-base">
            作品概念
            <div className="font-normal mt-4">
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
  open: PropTypes.bool
};

export default Showcase;
