import { Fragment } from "react";
import Pagetitle from "components/pagetitle";
import Listbox from "components/list/listbox";
import { useState } from "react";

import Modal from "components/modal";
import Showcase from "components/showcase";

import { workdata } from "assets/workData/data";

function List() {
  const [open, setOpen] = useState(false);
  const [openedItem, setOpenedItem] = useState({});

  const returnBoxes = (data) => {
    let currentType = "";
    return data.map((item, idx) => {
      if (currentType !== item.type) {
        currentType = item.type;
        return (
          <Fragment key={idx}>
            <Listbox item={item} isStart={true} />
            <Listbox
              item={item}
              setOpen={setOpen}
              setOpenedItem={setOpenedItem}
            />
          </Fragment>
        );
      }
      return (
        <Listbox
          key={idx}
          item={item}
          setOpen={setOpen}
          setOpenedItem={setOpenedItem}
        />
      );
    });
  };

  const handleBack = () => {
    let previousIndex = workdata.findIndex((item) => item.id === openedItem.id);
    setOpenedItem(workdata[previousIndex - 1]);
  };

  const handleNext = () => {
    let previousIndex = workdata.findIndex((item) => item.id === openedItem.id);
    setOpenedItem(workdata[previousIndex + 1]);
  };

  return (
    <div className="bg-primaryBackground">
      <div className="max-w-screen-xl mx-auto px-6 py-12 md:px-4 md:py-10">
        <Pagetitle title="作品集" />
        <div className="grid grid-cols-mobile_list md:grid-cols-list gap-y-3">
          {returnBoxes(workdata)}
        </div>
      </div>
      <Modal
        open={open}
        setOpen={setOpen}
        withCarousell={true}
        ableToBack={
          workdata.findIndex((item) => item.id === openedItem.id) !== 0
        }
        ableToNext={
          workdata.findIndex((item) => item.id === openedItem.id) !==
          workdata.length - 1
        }
        handleBack={handleBack}
        handleNext={handleNext}
      >
        <Showcase item={openedItem} setOpen={setOpen} />
      </Modal>
    </div>
  );
}

export default List;
