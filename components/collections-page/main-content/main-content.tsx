import { useState } from "react";
import { Product } from "../../ProductCMP";
import FlexProducts from "./flex-products/flex-products";
import GridProducts from "./grid-products/grid-products";
import MainCintentHeader from "./header/main-content-header";
import classes from "./main-content.module.scss";
import SortNavigation from "./sort-navigation/sort-navigation";

const MainContent = () => {
  const [display, setDisplay] = useState("grid");
  const displayChangeHandler = (value: string) => {
    setDisplay(value);
  };

  return (
    <div className={classes.container}>
      <MainCintentHeader value={16} />
      <SortNavigation displayHandler={displayChangeHandler} display={display} />
      {display === "grid" ? <GridProducts /> : <FlexProducts />}
    </div>
  );
};

export default MainContent;
