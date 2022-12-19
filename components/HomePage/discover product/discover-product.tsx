import { useRef } from "react";
import ArrowButton from "../../../UI/Arrow-button/Arrow-button";
import { Product } from "../../ProductCMP";
import classes from "./discover-product.module.scss";

const DiscoverProduct = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollHandler = (direction: string) => {
    const scrollValue = direction === "left" ? 200 : -200;
    if (contentRef.current) {
      if (direction === "left") {
        contentRef.current.scrollLeft += 200;
      } else {
        contentRef.current.scrollLeft -= 200;
      }
    }
  };
  return (
    <div className={classes.container}>
      <h1>Discover product</h1>
      <div className={classes.content} ref={contentRef}>
        <ArrowButton direction="left" scrollHandler={scrollHandler} />
        <ArrowButton direction="right" scrollHandler={scrollHandler} />
        {/* <Product
          title="Purple onion"
          price={20.0}
          image="/assets/productIMG/onion_1024x1024.webp"
        />
        <Product
          title="Purple onion"
          price={20.0}
          image="/assets/productIMG/onion_1024x1024.webp"
        />
        <Product
          title="Purple onion"
          price={20.0}
          image="/assets/productIMG/onion_1024x1024.webp"
        />
        <Product
          title="Purple onion"
          price={20.0}
          image="/assets/productIMG/onion_1024x1024.webp"
        />
        <Product
          title="Purple onion"
          price={20.0}
          image="/assets/productIMG/onion_1024x1024.webp"
        />
        <Product
          title="Purple onion"
          price={20.0}
          image="/assets/productIMG/onion_1024x1024.webp"
        />
        <Product
          title="Purple onion"
          price={20.0}
          image="/assets/productIMG/onion_1024x1024.webp"
        />
        <Product
          title="Purple onion"
          price={20.0}
          image="/assets/productIMG/onion_1024x1024.webp"
        />
        <Product
          title="Purple onion"
          price={20.0}
          image="/assets/productIMG/onion_1024x1024.webp"
        /> */}
      </div>
    </div>
  );
};
export default DiscoverProduct;
