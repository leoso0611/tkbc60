import { Fragment } from "react";
import Pagetitle from "components/pagetitle";
import Listbox from "components/list/listbox";

import { workdata } from "assets/workData/data";

function List() {
  const returnBoxes = (data) => {
    let currentType = "";
    return data.map((item, idx) => {
      if (currentType !== item.type) {
        currentType = item.type;
        return (
          <Fragment key={idx}>
            <Listbox item={item} isStart={true}/>
            <Listbox item={item} />
          </Fragment>
        );
      }
      return <Listbox key={idx} item={item} />;
    });
  };

  return (
    <div className="bg-primaryBackground">
      <div className="max-w-screen-xl mx-auto px-6 py-12 md:px-4 md:py-10">
        <Pagetitle title="作品集" />
        <div className="grid grid-cols-mobile_list md:grid-cols-list gap-y-3">
          {returnBoxes(workdata)}
        </div>
      </div>
    </div>
  );
}

export default List;
