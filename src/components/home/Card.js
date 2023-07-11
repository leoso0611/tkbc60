import PropTypes from "prop-types";
import React from "react";
import Clip from "../../images/icon/web_clip.svg";
import soundIcon from "../../images/icon/sound.svg";
import { motion } from "framer-motion";
import _ from "lodash";

const getTypeColour = (type) => {
  let typeColour = "";
  switch (type) {
    case "sound":
      typeColour = "bg-sound";
      break;
    case "photo":
      typeColour = "bg-photo";
      break;
    case "calligraphy":
      typeColour = "bg-calligraphy";
      break;
    case "diy":
      typeColour = "bg-diy";
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

const Card = ({ type, author_name, photo, icon, iconSize, onClickFn }) => {
  return (
    <motion.div
      className={`container absolute inline-flex justify-center items-start ${
        Math.random() < 0.5 ? "rotate-12" : "-rotate-12"
      }`}
      // onClick={onClickFn}

      onClick={() => onClickFn && onClickFn()}
      initial={{ y: -2000 }}
      animate={{ y: 0, rotate: angle[_.random(0, 3)] }}
      transition={{ type: "spring", duration: 1.5 }}
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.1 },
      }}
    >
      <div
        className={`mt-4 w-[60px] lg:w-[80px] h-[60px] lg:h-[80px] ${
          type === "sound" ? "bg-sound" : "bg-white"
        } rounded-2xl flex justify-center items-center`}
      >
        <>
          <div
            className={`absolute w-[60px] lg:w-[80px] h-[60px] lg:h-[80px] rounded-xl lg:rounded-2xl opacity-70 ${getTypeColour(
              type
            )}`}
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
            className={`h-[${iconSize}] w-[${iconSize}] rounded-2xl object-cover`}
            alt="img"
          />
        )}
      </div>
      <img src={Clip} className="absolute h-[25px] lg:h-[30px]" alt="clip" />
    </motion.div>
  );
};

Card.propTypes = {
  type: PropTypes.string.isRequired, // "sound" | "photo" | "calligraphy" | "diy",
  author_name: PropTypes.string,
  photo: PropTypes.string,
  icon: PropTypes.string,
  iconSize: PropTypes.number,
  onClickFn: PropTypes.func,
};

export default Card;
