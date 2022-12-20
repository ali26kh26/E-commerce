import ArrowButton from "../../../UI/Arrow-button/Arrow-button";
import classes from "./top-selling.module.scss";
import { useRef, useState, useEffect } from "react";
import { Product } from "../../ProductCMP";
import product from "../../../types/product";
const TopSelling = ({ products }: { products: Array<product> }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollHandler = (direction: string) => {
    if (contentRef.current?.scrollLeft === 0) {
      contentRef.current?.scrollTo({
        left: 20000,
        behavior: "smooth",
      });
      return;
    }

    const scrollValue = direction === "left" ? -252 : 252;
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
        {products.map((product) => (
          <div className={classes.item} key={product.slug}>
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSelling;
