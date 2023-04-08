import { useState } from "react";
import product from "../../../types/product";
import { Product } from "../../ProductCMP";
import FlexProducts from "./flex-products/flex-products";
import GridProducts from "./grid-products/grid-products";
import MainCintentHeader from "./header/main-content-header";
import classes from "./main-content.module.scss";
import SortNavigation from "./sort-navigation/sort-navigation";

const MainContent = ({ products }: { products: Array<product> }) => {
  const [display, setDisplay] = useState("grid");
  const displayChangeHandler = (value: string) => {
    setDisplay(value);
  };

  return (
    <div className={classes.container}>
      <MainCintentHeader value={16} />
      <SortNavigation
        displayHandler={displayChangeHandler}
        display={display}
        productsNums={products.length}
      />
      {display === "grid" ? (
        <GridProducts products={products} />
      ) : (
        <FlexProducts products={products} />
      )}
    </div>
  );
};

export default MainContent;
