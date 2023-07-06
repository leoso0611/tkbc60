import PropTypes from "prop-types";
import React from "react";
import Clip from "../../images/icon/web_clip.svg";
import soundIcon from "../../images/icon/sound.svg";
import { motion } from "framer-motion";
import CardBriefInfo from "./CardBriefInfo";

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

const Card = ({ type, photo, icon, iconSize, onClickFn }) => {
  return (
    <motion.div
      className={`container absolute inline-flex justify-center items-start ${
        Math.random() < 0.5 ? "rotate-12" : "-rotate-12"
      }`}
      // onClick={onClickFn}

      onClick={() => onClickFn && onClickFn()}
      initial={{ y: -2000 }}
      animate={{ y: 0, rotate: Math.random() < 0.5 ? 348 : 372 }}
      transition={{ type: "spring", duration: 1.5 }}
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.1 },
      }}
    >
      <div
        className={`mt-4 w-[80px] h-[80px] ${
          type === "sound" ? "bg-sound" : "bg-white"
        } rounded-2xl flex justify-center items-center`}
      >
        {photo && type !== "sound" && (
          <>
            <div
              className={`absolute  w-[80px] h-[80px] rounded-2xl opacity-70 ${getTypeColour(
                type
              )}`}
            />
            <img
              src={photo ?? ""}
              className="h-full w-full rounded-2xl object-cover"
              alt="img"
            />
          </>
        )}

        {(icon || type === "sound") && (
          <img
            src={icon ?? soundIcon}
            className={`h-[${iconSize}] w-[${iconSize}] rounded-2xl object-cover`}
            alt="img"
          />
        )}
      </div>
      <img src={Clip} className="absolute h-[30px]" alt="clip" />
    </motion.div>
  );
};

Card.propTypes = {
  type: PropTypes.string.isRequired, // "sound" | "photo" | "calligraphy" | "diy",
  photo: PropTypes.string,
  icon: PropTypes.string,
  iconSize: PropTypes.number,
  onClickFn: PropTypes.func,
};

export default Card;
