import Image from "next/image";
import { Star } from "../../icons";
import Price from "../product/Price";
import Score from "../product/Score";
import Title from "../product/title";
import classes from "./full-width-product.module.scss";
import ProductActions from "./product-actions/product-actions";

interface Props {
  image: string;
  text: string;
  title: string;
  price: number;
  discount?: number;
}

const FullWidthProduct = ({ image, text, title, price, discount }: Props) => {
  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <Image src={image} width={480} height={370} quality={100} />
      </div>
      <div className={classes.content}>
        <p>vegist</p>
        <div className={classes.score}>
          <Score Star={Star} />
        </div>
        <Title title={title} />
        <Price discount={56} value={price} />
        <p className={classes.description}>{text}</p>
        <ProductActions />
      </div>
    </div>
  );
};

export default FullWidthProduct;
