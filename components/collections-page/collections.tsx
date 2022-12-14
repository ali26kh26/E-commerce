import product from "../../types/product";
import classes from "./collections.module.scss";
import LgScreenFilter from "./lg-screen-filter/lg-screen";
import MainContent from "./main-content/main-content";
const Collections = ({ products }: { products: Array<product> }) => {
  return (
    <main className={classes.container}>
      <div className={classes.side_filter}>
        <LgScreenFilter />
      </div>
      <MainContent products={products} />
    </main>
  );
};

export default Collections;
