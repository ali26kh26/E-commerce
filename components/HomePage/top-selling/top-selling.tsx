import ArrowButton from "../../../UI/Arrow-button/Arrow-button";
import classes from "./top-selling.module.scss";
import { useRef, useState } from "react";
import { Product } from "../../ProductCMP";
const TopSelling = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollHandler = (direction: string) => {
    // if (contentRef.current?.scrollLeft === 0) {
    //   contentRef.current?.scrollTo({
    //     left: 20000,
    //     behavior: "smooth",
    //   });
    //   return;
    // }
    const scrollValue = direction === "left" ? -252 : 252;
    console.log(contentRef.current?.scrollLeft);
    contentRef.current?.scrollBy({
      left: scrollValue,
      behavior: "smooth",
    });
  };
  return (
    <div className={classes.container}>
      <ArrowButton direction="left" scrollHandler={scrollHandler} />
      <ArrowButton direction="right" scrollHandler={scrollHandler} />
      <div className={classes.inner} ref={contentRef}>
        <div className={classes.item}>
          <Product
            title="Purple onion"
            price={20.0}
            image="/assets/productIMG/onion_1024x1024.webp"
          />
        </div>{" "}
        <div className={classes.item}>
          <Product
            title="Purple onion"
            price={20.0}
            image="/assets/productIMG/onion_1024x1024.webp"
          />
        </div>{" "}
        <div className={classes.item}>
          <Product
            title="Purple onion"
            price={20.0}
            image="/assets/productIMG/onion_1024x1024.webp"
          />
        </div>{" "}
        <div className={classes.item}>
          <Product
            title="Purple onion"
            price={20.0}
            image="/assets/productIMG/onion_1024x1024.webp"
          />
        </div>{" "}
        <div className={classes.item}>
          <Product
            title="Purple onion"
            price={20.0}
            image="/assets/productIMG/onion_1024x1024.webp"
          />
        </div>{" "}
        <div className={classes.item}>
          <Product
            title="Purple onion"
            price={20.0}
            image="/assets/productIMG/onion_1024x1024.webp"
          />
        </div>{" "}
        <div className={classes.item}>
          <Product
            title="Purple onion"
            price={20.0}
            image="/assets/productIMG/onion_1024x1024.webp"
          />
        </div>
      </div>
    </div>
  );
};

export default TopSelling;
