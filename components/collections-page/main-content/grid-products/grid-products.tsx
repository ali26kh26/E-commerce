import product from "../../../../types/product";
import { Product } from "../../../ProductCMP";
import classes from "./grid-products.module.scss";

const GridProducts = ({ products }: { products: Array<product> }) => {
  return (
    <div className={classes.container}>
      {products.map((product) => (
        <Product key={product.slug} product={product} />
      ))}
    </div>
  );
};

export default GridProducts;
