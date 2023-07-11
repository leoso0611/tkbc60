import PropTypes from "prop-types";
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
        className="hover:bg-gray-300 rounded-full w-8 h-8 flex justify-center items-center absolute md:right-8 right-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
        >
          <path
            d="M3 3L20 20M3 20L20 3"
            stroke="#1B252F"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <div className="flex md:flex-row flex-col h-full md:mt-0 mt-10">
        <div className="md:flex-[2] md:flex md:items-center justify-center">
          {item.type !== "sound" ? (
            <img
              src={source}
              alt="show"
              className="md:h-full object-contain"
            />
          ) : (
            <Player item={item} open={open} />
          )}
        </div>

        <div className="md:flex-1 md:px-6 md:py-10 px-0 pt-0 pb-8 md:mt-0 mt-6 md:flex md:flex-col md:justify-start md:justify-center">
          <div className="flex items-center">
            <img src={Clip} alt="clip" className="w-10" />{" "}
            {/* TODO: switch type => different clip color */}
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
  open: PropTypes.bool,
};

export default Showcase;
