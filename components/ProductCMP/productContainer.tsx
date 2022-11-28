import Img from "./product/img";
import CardButton from "./product/CardButton";
import Title from "./product/title";
import Score from "./product/Score";
import Price from "./product/Price";
import CustomButton from "./product/CustomButton";
import { Eye, Heart, Star } from "../icons";
import React, { useEffect, useRef } from "react";
import style from "./animation.module.css";
import { useRouter } from "next/router";
import MarkUp from "../../UI/markup/markup";
import DiscountBadge from "./product/discount-badge/discount-badge";
import product from "../../types/product";
import QuickViewButton from "./product/quick-view-button/quick-view-button";

function productContainer({ product }: { product: product }): JSX.Element {
  const customButton = useRef<HTMLDivElement>(null);
  const cardButton = useRef<HTMLDivElement>(null);
  const router = useRouter();

  function addClass(e: React.MouseEvent) {
    customButton.current?.classList.add(style.customAnimate);
    cardButton.current?.classList.add(style.cardAnimate);
    customButton.current?.classList.remove(style.customButtom);
    cardButton.current?.classList.remove(style.cardButtom);
  }

  function removeClass(e: React.MouseEvent) {
    cardButton.current?.classList.add(style.cardButtom);
    customButton.current?.classList.add(style.customButtom);
    customButton.current?.classList.remove(style.customAnimate);
    cardButton.current?.classList.remove(style.cardAnimate);
  }

  return (
    <div
      onMouseOver={addClass}
      onMouseLeave={removeClass}
      className=" relative h-fit flex flex-col items-center bg-white"
      // onClick={() => {
      //   router.push(`/collections/${product.name}`);
      // }}
    >
      <div className=" bg-white relative overflow-hidden">
        {/* big screen */}
        <div ref={customButton} className={style.customButtom}>
          <MarkUp text="WISHLIST" small>
            <CustomButton
              Icon={Heart}
              className={
                "bg-white shadow-md cursor-pointer p-2 rounded-full mb-4"
              }
            />
          </MarkUp>
          {/* <MarkUp text="QUICKVEIW" small>
            <CustomButton
              Icon={Eye}
              className={" bg-white cursor-pointer shadow-md p-2 rounded-full"}
            />
          </MarkUp> */}
          <QuickViewButton product={product}>
            <CustomButton
              Icon={Eye}
              className={" bg-white cursor-pointer shadow-md p-2 rounded-full"}
            />
          </QuickViewButton>
        </div>

        {/* Image */}
        <Img src={product.image} />

        {/* big screen */}
        <div ref={cardButton} className={style.cardButtom}>
          <CardButton />
        </div>

        {/* Small screen */}
        <div className="w-full flex p-2 flex-row-reverse items-center justify-center gap-2  lg:hidden">
          <MarkUp text="ADD TO CART" small>
            <CardButton />
          </MarkUp>

          <QuickViewButton product={product}>
            <MarkUp text="QUICKVIEW" small>
              <CustomButton
                Icon={Eye}
                className={"bg-white cursor-pointer shadow-xl p-2 rounded-full"}
              />
            </MarkUp>
          </QuickViewButton>
          <MarkUp text="WISHLIST" small>
            <CustomButton
              Icon={Heart}
              className={"bg-white cursor-pointer shadow-xl p-2 rounded-full"}
            />
          </MarkUp>
        </div>
      </div>

      {/* title */}
      <div className=" mt-2 h-1/3 text-center space-y-2">
        <Title title={product.name} />
        <Score Star={Star} />
        <Price discount={product.discount} value={product.price} />
      </div>
      {product.discount && (
        <DiscountBadge relative discount={product.discount} />
      )}
    </div>
  );
}

export default productContainer;
