import Home_bg from "../images/home_bg.jpeg";
import { useEffect, useState } from "react";
import Card from "components/home/Card";
import { workdata } from "assets/workData/data";
import refreshIcon from "../images/icon/refresh.svg";
import _ from "lodash";
import { motion } from "framer-motion";
import styled from "styled-components";
import { getTypeZh } from "util/utilfunction";
import Modal from "components/modal";
import Showcase from "components/showcase";
import { typeArray } from "../util/constant";

function Wire(props) {
  return (
    <div id="wire" className="relative flex justify-center z-0" key={props.key}>
      <div className="relative flex flex-row">
        <div className="h-screen w-[7px] bg-gradient-to-l from-gray-400 to-transparent"></div>
        <div className="h-scree w-[7px] bg-wire shadow-2xl"></div>
      </div>

      <div className="grid grid-rows-8 absolute gap-5 my-4 md:my-24">
        {props.children}
      </div>
    </div>
  );
}

const textMotion = {
  rest: {
    color: "grey",
    x: 0,
    width: 0,
    transition: {
      duration: 2,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    x: 30,
    width: 250,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

function Homepage() {
  const displayCardNum = window.innerWidth > 1000 ? 15 : 10;
  const colNum = window.innerWidth > 1000 ? 9 : 3; //+1
  const rowNum = 4; //+1
  const [matrix, setMatrix] = useState(
    Array.from({ length: 10 }, () => Array.from({ length: 6 }, () => undefined))
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openedItem, setOpenedItem] = useState(undefined);

  function handleFresh() {
    let temp = Array.from({ length: 10 }, () =>
      Array.from({ length: 6 }, () => undefined)
    );

    let newCardData = _.shuffle(workdata);
    for (let i = 1; i <= colNum; i++) {
      let tempRowNum = _.random(0, rowNum);

      if (newCardData[i - 1]) {
        temp[i][tempRowNum] = newCardData[i - 1];
      } else {
        temp[i][tempRowNum] = {
          id: i,
          type: typeArray[_.random(0, typeArray.length - 1)],
          author_name: undefined,
        };
      }
    }
    for (let i = colNum + 1; i <= displayCardNum; i++) {
      let tempColNum = _.random(1, colNum);
      let tempRowNum = _.random(0, rowNum);
      while (temp[tempColNum][tempRowNum]) {
        // when box have item, random other postion
        tempColNum = _.random(1, colNum);
        tempRowNum = _.random(0, rowNum);
      }
      if (newCardData[i]) {
        temp[tempColNum][tempRowNum] = newCardData[i];
      } else {
        temp[tempColNum][tempRowNum] = {
          id: i,
          type: typeArray[_.random(0, typeArray.length - 1)],
          author_name: undefined,
        };
      }
    }
    setMatrix(temp);
  }

  const handleReload = () => {
    window.location.reload(false);
  };

  useEffect(() => {
    handleFresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let a = [
    "z-[10]",
    "z-[9]",
    "z-[8]",
    "z-[7]",
    "z-[6]",
    "z-[5]",
    "z-[4]",
    "z-[3]",
    "z-[2]",
    "z-[1]",
  ];

  return (
    <>
      <div className="relative overflow-hidden ">
        <img
          src={Home_bg}
          alt="logo"
          className={`absolute top-0  h-full w-screen z-[-3] overflow-hidden object-cover blur-sm`}
        />
        <div className="h-full grid grid-cols-4 lg:grid-cols-10 justify-evenly w-full lg:w-4/6 mx-auto">
          {matrix.map((items, cols) => {
            if (window.innerWidth < 1000 && cols > colNum) {
              return undefined;
            }
            return (
              <div key={cols} className={`${a[cols]}`}>
                <Wire>
                  <div className={`${cols % 2 === 0 ? "mt-12" : ""}`}>
                    {items.map((box, rows) => {
                      if (cols === 0 && rows === 3) {
                        return (
                          <div key={rows} className="h-[100px] w-[100px] mb-3">
                            <Card
                              type="refresh"
                              icon={refreshIcon}
                              iconSize={30}
                              onClickFn={handleReload}
                            />
                          </div>
                        );
                      }
                      return (
                        <div
                          key={rows}
                          className="group h-[100px] w-[100px] relative mb-6"
                        >
                          {box && (
                            <Container
                              whileHover="hover"
                              onClick={() => {
                                setOpenedItem(box);
                                box.author_name && setIsModalOpen(!isModalOpen);
                              }}
                            >
                              <motion.div
                                className={`absolute invisible ${
                                  box.author_name
                                    ? "group-hover:visible"
                                    : "group-hover:invisible"
                                } group-hover:visible z-0 bg-secondary  h-[50px] rounded-xl mt-5 ml-10 py-10 pl-12 drop-shadow-2xl flex justify-start items-center `}
                                variants={textMotion}
                              >
                                <div className="text-xl ">
                                  <h2 className=" overflow-hidden  whitespace-nowrap">
                                    {getTypeZh(box.type)}
                                  </h2>
                                  <h2 className="font-bold   overflow-hidden whitespace-nowrap">
                                    {box.author_name}
                                  </h2>
                                </div>
                              </motion.div>
                              <Card
                                type={box.type}
                                author_name={box.author_name}
                                photo={box.source}
                              />
                            </Container>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </Wire>
              </div>
            );
          })}
        </div>
      </div>
      <Modal open={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <Showcase
          item={openedItem}
          open={isModalOpen}
          setOpen={setIsModalOpen}
        />
      </Modal>
    </>
  );
}

const Container = styled(motion.div)`
  position: relative;
`;

export default Homepage;
