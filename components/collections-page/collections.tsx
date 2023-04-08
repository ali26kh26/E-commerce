import { useAppSelector } from "../../hooks/hooks";
import product from "../../types/product";
import classes from "./collections.module.scss";
import LgScreenFilter from "./lg-screen-filter/lg-screen";
import MainContent from "./main-content/main-content";
import { getFilteredProducts } from "../../helpers/product-client";

const Collections = ({ products }: { products: Array<product> }) => {
  const filter = useAppSelector((state) => state.fiter);

  const filteredProducts = getFilteredProducts(products);

  return (
    <main className={classes.container}>
      <div className={classes.side_filter}>
        <LgScreenFilter productsNums={filteredProducts.length} />
      </div>
      <MainContent products={filteredProducts} />
    </main>
  );
};

export default Collections;
