import PropTypes from "prop-types";
import React from "react";
import Clip from "../../images/icon/web_clip.svg";
import soundIcon from "../../images/icon/sound.svg";
import { motion } from "framer-motion";
// import _ from "lodash";

// const colorArray = [
//   "bg-sound",
//   "bg-media",
//   "bg-calligraphy",
//   "bg-zothers",
//   "bg-drawing",
// ];
import _ from "lodash";

const getTypeColour = (type) => {
  let typeColour = "";
  switch (type) {
    case "sound":
      typeColour = "bg-sound";
      break;
    case "media":
      typeColour = "bg-media";
      break;
    case "calligraphy":
      typeColour = "bg-calligraphy";
      break;
    case "zothers":
      typeColour = "bg-zothers";
      break;
    case "drawing":
      typeColour = "bg-drawing";
      break;
    default:
      typeColour = "bg-white";
  }
  return typeColour;
};

const angle = [336, 348, 372, 384];

const Card = ({ type, author_name, photo, icon, iconSize = 30, onClickFn }) => {
  return (
    <motion.div
      className={`container absolute inline-flex justify-center items-start ${
        Math.random() < 0.5
          ? Math.random() < 0.5
            ? "rotate-12"
            : "rotate-24"
          : Math.random() < 0.5
          ? "-rotate-12"
          : "-rotate-24"
      }`}
      onClick={() => onClickFn && onClickFn()}
      initial={{ y: -2000 }}
      animate={{ y: 0, rotate: angle[_.random(0, 3)] }}
      transition={{ type: "spring", duration: 1.5 }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.1 },
      }}
    >
      <div
        className={`mt-4 2xl:w-[80px] w-[70px] 2xl:h-[80px] h-[70px] ${
          icon && "bg-secondary"
        } rounded-2xl flex justify-center items-center`}
      >
        <>
          <div
            className={`absolute 2xl:w-[80px] w-[70px] 2xl:h-[80px] h-[70px] rounded-2xl mix-blend-multiply ${
              !(type === "sound" && author_name) && "opacity-90"
            } ${getTypeColour(type)} ${type === "sound" && "z-[-1]"}`}
          />
          {photo && type !== "sound" && (
            <img
              src={photo ?? ""}
              className="h-full w-full rounded-2xl object-cover"
              alt="img"
            />
          )}
        </>

        {(icon || (type === "sound" && author_name)) && (
          <img
            src={icon ?? soundIcon}
            className={`h-[${iconSize?.toString()}px] w-[${iconSize?.toString()}px] object-cover`}
            alt="img"
          />
        )}
      </div>
      <img src={Clip} className="absolute h-[25px] lg:h-[30px]" alt="clip" />
    </motion.div>
  );
};

Card.propTypes = {
  type: PropTypes.string.isRequired, // "sound" | "media" | "calligraphy" | "others",
  author_name: PropTypes.string,
  photo: PropTypes.string,
  icon: PropTypes.string,
  iconSize: PropTypes.number,
  onClickFn: PropTypes.func,
};

export default Card;
