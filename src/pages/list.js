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
  function compare(a, b) {
    if (a.type < b.type) {
      return -1;
    }
    if (a.type > b.type) {
      return 1;
    }
    return 0;
  }
  const sortedData = workdata.sort(compare);

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
    let previousIndex = sortedData.findIndex(
      (item) => item.id === openedItem.id
    );
    setOpenedItem(sortedData[previousIndex - 1]);
  };

  const handleNext = () => {
    let previousIndex = sortedData.findIndex(
      (item) => item.id === openedItem.id
    );
    setOpenedItem(sortedData[previousIndex + 1]);
  };

  return (
    <>
      <div className="bg-primaryBackground">
        <div className="max-w-screen-xl mx-auto px-6 py-12 md:px-4 md:py-16">
          <Pagetitle title="作品集" />
          <div className="grid grid-cols-mobile_list md:grid-cols-list gap-y-3">
            {returnBoxes(sortedData)}
          </div>
        </div>
      </div>
      <Modal
        open={open}
        setOpen={setOpen}
        withCarousell={true}
        ableToBack={
          sortedData.findIndex((item) => item.id === openedItem.id) !== 0
        }
        ableToNext={
          sortedData.findIndex((item) => item.id === openedItem.id) !==
          sortedData.length - 1
        }
        handleBack={handleBack}
        handleNext={handleNext}
      >
        <Showcase item={openedItem} open={open} setOpen={setOpen} />
      </Modal>
    </>
  );
}

export default List;
