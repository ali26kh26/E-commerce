import Image from "next/image";
import product from "../../../types/product";
import { Star } from "../../icons";
import Price from "../product/Price";
import Score from "../product/Score";
import Title from "../product/title";
import classes from "./full-width-product.module.scss";
import ProductActions from "./product-actions/product-actions";

const FullWidthProduct = ({ product }: { product: product }) => {
  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <Image src={product.image} width={480} height={370} quality={100} />
      </div>
      <div className={classes.content}>
        <p>vegist</p>
        <div className={classes.score}>
          <Score Star={Star} />
        </div>
        <Title title={product.name} />
        <Price discount={56} value={product.price} />
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
