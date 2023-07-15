import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "images/logo.png";

//css object
const linkclassName =
  "block py-2 pl-3 pr-4 text-secondary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0";
const mobilelinkclassName = "text-secondary ";

function Navbar() {
  const [menuTab, setMenuTab] = useState(false);

  const handleMenuTabOnClick = () => {
    setMenuTab(!menuTab);
  };

  const desktopMenu = () => (
    <div className="hidden w-full md:block md:w-auto">
      <ul className="font-semibold font-bold flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-16 md:mt-0 md:border-0">
        <li>
          <Link to="/about">
            <div className={linkclassName}>關於60週年</div>
          </Link>
        </li>
        <li>
          <Link to="/list">
            <div className={linkclassName}>作品集</div>
          </Link>
        </li>
        <li>
          <Link to="/bless">
            <div className={linkclassName}>祝福語</div>
          </Link>
        </li>
      </ul>
    </div>
  );

  const mobileMenu = () =>
    menuTab ? (
      <div className="block md:hidden fixed top-20 left-0 h-[calc(100%-5rem)] bg-mobilemenutab w-screen z-50">
        <div className="font-semibold pt-12 flex flex-col gap-8 items-center">
          <Link to="/about">
            <div className={mobilelinkclassName} onClick={handleMenuTabOnClick}>
              關於60週年
            </div>
          </Link>
          <Link to="/list">
            <div className={mobilelinkclassName} onClick={handleMenuTabOnClick}>
              作品集
            </div>
          </Link>
          <Link to="/bless">
            <div className={mobilelinkclassName} onClick={handleMenuTabOnClick}>
              祝福語
            </div>
          </Link>
        </div>
      </div>
    ) : null;

  return (
    <nav className="bg-primary border-gray-200 md:h-24 h-20 sticky top-0 z-40">
      <div className="max-w-screen-xl h-full flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="md:h-16 h-12 mr-3"
            onClick={() => setMenuTab(false)}
          />
        </Link>
        <button
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={handleMenuTabOnClick}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6 fill-secondary"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18"
          >
            {!menuTab ? (
              <path
                fillRule="evenodd"
                d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z"
                clipRule="evenodd"
              ></path>
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="m9.414 8 5.293-5.293a1 1 0 1 0-1.414-1.414L8 6.586 2.707 1.293a1 1 0 0 0-1.414 1.414L6.586 8l-5.293 5.293a1 1 0 1 0 1.414 1.414L8 9.414l5.293 5.293a1 1 0 0 0 1.414-1.414L9.414 8Z"
              />
            )}
          </svg>
        </button>
        {desktopMenu()}
        {mobileMenu()}
      </div>
    </nav>
  );
}

export default Navbar;
