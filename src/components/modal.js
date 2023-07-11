import PropTypes from "prop-types";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function Modal({
  open,
  children,
  withCarousell = false,
  ableToNext = true,
  ableToBack = true,
  handleNext,
  handleBack,
}) {
  const isMobile = window.innerWidth < 768;
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-[80]" onClose={() => {}}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-100 bg-opacity-70 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center md:p-4 p-0 text-center items-center">
            {withCarousell && !isMobile && (
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="md:block flex justify-center">
                  <button disabled={!ableToBack} onClick={handleBack} className="focus:outline-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`w-16 h-16 ${
                        ableToBack ? "fill-black" : "fill-disabled"
                      }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span
                      className={`text-sm ${
                        ableToBack ? "text-black" : "text-disabled"
                      }`}
                    >
                      上一份作品
                    </span>
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            )}

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all m-6 sm:w-full md:max-w-4xl w-[90%] md:h-[600px] h-[80vh]">
                {children}
              </Dialog.Panel>
            </Transition.Child>

            {withCarousell && !isMobile && (
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="md:block flex justify-center">
                  <button disabled={!ableToNext} onClick={handleNext} className="focus:outline-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`w-16 h-16 ${
                        ableToNext ? "fill-black" : "fill-disabled"
                      }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span
                      className={`text-sm ${
                        ableToNext ? "text-black" : "text-disabled"
                      }`}
                    >
                      下一份作品
                    </span>
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            )}
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

Modal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  withCarousell: PropTypes.bool,
  ableToNext: PropTypes.bool,
  ableToBack: PropTypes.bool,
  handleNext: PropTypes.func,
  handleBack: PropTypes.func,
};
