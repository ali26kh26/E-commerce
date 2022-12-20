import Image from "next/image";
import product from "../../../types/product";
import { Star } from "../../icons";
import GoToProduct from "../product/go-to-product/go-to-product";
import Price from "../product/Price";
import Score from "../product/Score";
import Title from "../product/title";
import classes from "./full-width-product.module.scss";
import ProductActions from "./product-actions/product-actions";

const FullWidthProduct = ({ product }: { product: product }) => {
  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <GoToProduct slug={product.slug}>
          <Image src={product.image} width={480} height={370} quality={100} />
        </GoToProduct>
      </div>
      <div className={classes.content}>
        <p>vegist</p>
        <div className={classes.score}>
          <Score Star={Star} />
        </div>
        <Title title={product.name} />
        <div className={classes.price}>
          <Price discount={product.discount} value={product.price} />
        </div>
        <p className={classes.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          corrupti eius commodi quidem? Laboriosam, amet numquam veritatis cum
          aliquid possimus voluptatem dolorem placeat unde quisquam iusto
          eligendi praesentium similique ipsam?
        </p>
        <ProductActions product={product} />
      </div>
    </div>
  );
};

export default FullWidthProduct;
