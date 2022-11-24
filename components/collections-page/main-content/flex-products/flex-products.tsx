import product from "../../../../types/product";
import FullWidthProduct from "../../../ProductCMP/full-width-product/full-width-product";
import classes from "./flex-products.module.scss";

const FlexProducts = ({ products }: { products: Array<product> }) => {
  return (
    <div className={classes.container}>
      {products.map((product) => (
        <FullWidthProduct key={product.slug} product={product} />
      ))}
    </div>
  );
};

export default FlexProducts;
