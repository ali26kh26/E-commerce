import classes from "./filter-button.module.scss";
import { BiFilterAlt } from "react-icons/bi";
import { useState } from "react";
import SideModal from "../../../../../UI/side-modal/side-modal";
import LgScreenFilter from "../../../lg-screen-filter/lg-screen";

const FilterButton = () => {
  const [showModal, setshowModal] = useState(false);

  return (
    <>
      <div
        className={classes.container}
        onClick={() => setshowModal((prev) => !prev)}
      >
        <BiFilterAlt />
        <p>Filter</p>
      </div>
      <SideModal show={showModal} setShow={setshowModal}>
        <LgScreenFilter />
      </SideModal>
    </>
  );
};

export default FilterButton;
