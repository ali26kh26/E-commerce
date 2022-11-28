import product from "../../types/product";
import { Star } from "../icons";
import Score from "../ProductCMP/product/Score";
import ProductQuantity from "./product-detail/product-quantity/product-quantity";
import classes from "./product-page.module.scss";
import Productetail from "./product-detail/product-detail";
import ProductDelivery from "./product-delivery/product-delivery";
import ProductImage from "./prodcut-image/product-image";
import AdditionalInfo from "./additional-informatin/additional-information";
import ProductDetailContainer from "./product-detail-container/product-detail-container";
interface Props {
  product: product;
}

const ProductPage = ({ product }: Props) => {
  return (
    <>
      <div className={classes.container}>
        <ProductDetailContainer product={product} />
        <ProductDelivery />
      </div>
      <AdditionalInfo product={product} />
    </>
  );
};
export default ProductPage;
