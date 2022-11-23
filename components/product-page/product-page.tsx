import product from "../../types/product";
import { Star } from "../icons";
import Score from "../ProductCMP/product/Score";
import ProductQuantity from "./product-detail/product-quantity/product-quantity";
import classes from "./product-page.module.scss";
import Productetail from "./product-detail/product-detail";
import ProductDelivery from "./product-delivery/product-delivery";
import ProductImage from "./prodcut-image/product-image";
import AdditionalInfo from "./additional-informatin/additional-information";
interface Props {
  product: product;
}

const ProductPage = ({ product }: Props) => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.product}>
          <ProductImage path={product.image} />
          <Productetail product={product} />
        </div>
        <ProductDelivery />
      </div>
      <AdditionalInfo product={product} />
    </>
  );
};
export default ProductPage;
