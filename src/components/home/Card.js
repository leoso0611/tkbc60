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
      animate={{
        y: 0,
        rotate:
          Math.random() < 0.5
            ? Math.random() < 0.5
              ? 348
              : 336
            : Math.random() < 0.5
            ? 372
            : 384,
      }}
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
        {!photo && !author_name && (
          <div
            className={`absolute 2xl:w-[80px] w-[70px] 2xl:h-[80px] h-[70px] rounded-2xl mix-blend-multiply opacity-90 ${getTypeColour(
              type
            )}`}
          />
        )}
        {photo && type !== "sound" && (
          <>
            <img
              src={photo ?? ""}
              className="h-full w-full rounded-2xl object-cover"
              alt="img"
            />
            <div
              className={`absolute 2xl:w-[80px] w-[70px] 2xl:h-[80px] h-[70px] rounded-2xl mix-blend-multiply opacity-90 ${getTypeColour(
                type
              )}`}
            />
          </>
        )}

        {(icon || (type === "sound" && author_name)) && (
          <>
            <div
              className={`absolute 2xl:w-[80px] w-[70px] 2xl:h-[80px] h-[70px] rounded-2xl mix-blend-multiply ${
                type !== "sound" && "opacity-90"
              } ${getTypeColour(type)} ${type === "sound" && "z-[-1]"}`}
            />
            <img
              src={icon ?? soundIcon}
              className={`h-[${iconSize?.toString()}px] w-[${iconSize?.toString()}px] object-cover`}
              alt="img"
            />
          </>
        )}
      </div>
      <img src={Clip} className="absolute h-[30px]" alt="clip" />
    </motion.div>
  );
};

Card.propTypes = {
  type: PropTypes.string.isRequired, // "sound" | "media" | "calligraphy" | "zothers",
  author_name: PropTypes.string,
  photo: PropTypes.string,
  icon: PropTypes.string,
  iconSize: PropTypes.number,
  onClickFn: PropTypes.func,
};

export default Card;
