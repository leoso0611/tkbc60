import PropTypes from "prop-types";
import Close from "images/icon/close.svg";

function Showcase({ item, setOpen }) {
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
      <div>{item.author_name}</div>
      <div className="flex md:flex-row flex-col">
        <div className="md:flex-[2]">2</div>
        <div className="md:flex-1">1</div>
      </div>
    </div>
  );
}

Showcase.propTypes = {
  item: PropTypes.object,
  setOpen: PropTypes.func,
};

export default Showcase;
