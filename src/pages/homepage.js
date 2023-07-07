import Home_bg from "../images/home_bg.png";
import { useEffect, useState } from "react";
import Card from "components/home/Card";
import { cardData } from "assets/data/cardData";
import refreshIcon from "../images/icon/refresh.svg";
import _ from "lodash";
import { motion } from "framer-motion";

function Wire(props) {
  return (
    <div id="wire" className="relative flex justify-center z-0" key={props.key}>
      <div className="relative flex flex-row">
        <div className="h-screen w-[7px] bg-gradient-to-l from-gray-400 to-transparent"></div>
        <div className="h-scree w-[7px] bg-wire shadow-2xl"></div>
      </div>

      <div className="grid grid-rows-8 absolute gap-5 mt-10 lg:mt-2 2xl:mt-14 ">
        {props.children}
      </div>
    </div>
  );
}

function Homepage() {
  const displayCardNum = window.innerWidth > 1000 ? 15 : 10;
  const colNum = window.innerWidth > 1000 ? 9 : 3; //+1
  const rowNum = 4; //+1
  const [matrix, setMatrix] = useState(
    Array.from({ length: 10 }, () => Array.from({ length: 6 }, () => undefined))
  );

  function handleFresh() {
    let temp = Array.from({ length: 10 }, () =>
      Array.from({ length: 6 }, () => undefined)
    );

    let newCardData = _.shuffle(cardData);
    for (let i = 0; i <= displayCardNum; i++) {
      temp[_.random(0, colNum)][_.random(0, rowNum)] = newCardData[i];
    }
    setMatrix(temp);
  }

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
    <div className="relative overflow-hidden ">
      <img
        src={Home_bg}
        alt="logo"
        className={`absolute top-0  h-full w-screen z-[-3] overflow-hidden object-cover`}
      />
      {/* <Card type="diy" />
      <Card type="calligraphy" />
      <Card type="sound" />
      <Card type="drawing" /> */}
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
                    if (cols === 0 && rows === 4) {
                      return (
                        <div key={rows} className="h-[100px] w-[100px]">
                          <Card
                            type="refresh"
                            icon={refreshIcon}
                            iconSize={30}
                            onClickFn={handleFresh}
                          />
                        </div>
                      );
                    }
                    return (
                      <div
                        key={rows}
                        className="group h-[100px] w-[100px] relative"
                      >
                        {box && (
                          <div
                            style={{
                              direction: "ltr",
                            }}
                          >
                            <motion.div
                              className="absolute invisible group-hover:visible group-hover:rotate-360 group-hover: !z-50 bg-secondary p-2 top-0 h-[50px] bottom-0 rounded-lg"
                              initial={{ width: 0 }}
                              animate={{
                                width: 300,
                              }}
                              transition={{ type: "spring", duration: 1.5 }}
                            >
                              <div>
                                <h2>{box.type}</h2>
                                <h2>{box.name}</h2>
                              </div>
                            </motion.div>
                            <Card type={box.type} photo={box.image} />
                          </div>
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
  );
}

export default Homepage;
