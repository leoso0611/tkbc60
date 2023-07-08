import PropTypes from "prop-types";
import soundIcon from "images/icon/sound.svg";

import { motion } from "framer-motion";
import { returnTitle, returnFontColor } from "helpers/showcaseTypeHelper";

function Listbox({ isStart = false, item, setOpen, setOpenedItem }) {
  const { name, source, type } = item;

  const handleModalOpen = () => {
    setOpenedItem(item);
    setOpen(true);
  };
  return isStart ? (
    <div
      className={`w-[90px] h-[90px] md:w-[142px] md:h-[142px] flex justify-center items-center bg-${type} text-xl ${returnFontColor(type)} font-semibold`}
    >
      {returnTitle(type)}
    </div>
  ) : (
    <motion.div whileHover={{ scale: 1.2 }}>
      {type === "sound" ? (
        <div
          className="w-[90px] h-[90px] md:w-[142px] md:h-[142px] bg-sound flex flex-col justify-center items-center font-semibold cursor-pointer"
          onClick={handleModalOpen}
        >
          <img src={soundIcon} alt="img" />
          <div className="text-white">{name}</div>
        </div>
      ) : (
        <div
          className="w-[90px] h-[90px] md:w-[142px] md:h-[142px] font-semibold cursor-pointer"
          onClick={handleModalOpen}
        >
          <img src={source} className="h-full w-full object-cover" alt="img" />
        </div>
      )}
    </motion.div>
  );
}

Listbox.propTypes = {
  isStart: PropTypes.bool,
  item: PropTypes.object,
  setOpen: PropTypes.func,
  setOpenedItem: PropTypes.func,
};

export default Listbox;
