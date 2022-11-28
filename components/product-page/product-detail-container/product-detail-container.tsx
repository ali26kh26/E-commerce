import product from "../../../types/product";
import ProductImage from "../prodcut-image/product-image";
import Productetail from "../product-detail/product-detail";
import classes from "./product-detail-container.module.scss";
const ProductDetailContainer = ({
  product,
  quickview,
}: {
  product: product;
  quickview?: boolean;
}) => {
  return (
    <div className={classes.product}>
      <ProductImage path={product.image} />
      <Productetail product={product} quickview />
    </div>
  );
};

export default ProductDetailContainer;
