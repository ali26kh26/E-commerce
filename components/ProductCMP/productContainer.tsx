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
import AddToCartButton from "./product/add-to-cart-button/add-to-cart-button";
import AddToWishListButton from "./product/add-to-wishlist-button/add-to-wishlist-button";
import { useAppSelector } from "../../hooks/hooks";
import { AiOutlineClose } from "react-icons/ai";

function productContainer({ product }: { product: product }): JSX.Element {
  const customButton = useRef<HTMLDivElement>(null);
  const cardButton = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const wishlist = useAppSelector((state) => state.wishlist);

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
  const is_in_wishlist = () => {
    const index = wishlist.items.findIndex(
      (item) => item.name === product.name
    );
    if (index >= 0) {
      return DeleteWishlistButton;
    } else {
      return Heart;
    }
  };
  const DeleteWishlistButton = () => {
    return (
      <span className="hover:text-orange-600">
        <AiOutlineClose />
      </span>
    );
  };
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
            <AddToWishListButton product={product}>
              <CustomButton
                Icon={is_in_wishlist()}
                className={
                  "bg-white shadow-md cursor-pointer p-2 rounded-full mb-4"
                }
              />
            </AddToWishListButton>
          </MarkUp>
          <QuickViewButton product={product}>
            <MarkUp text="QUICKVIEW" small>
              <CustomButton
                Icon={Eye}
                className={
                  " bg-white cursor-pointer shadow-md p-2 rounded-full"
                }
              />
            </MarkUp>
          </QuickViewButton>
        </div>

        {/* Image */}
        <Img src={product.image} />

        {/* big screen */}
        <div ref={cardButton} className={style.cardButtom}>
          <AddToCartButton product={product}>
            <CardButton />
          </AddToCartButton>
        </div>

        {/* Small screen */}
        <div className="w-full flex p-2 flex-row-reverse items-center justify-center gap-2  lg:hidden">
          <AddToCartButton product={product}>
            <MarkUp text="ADD TO CART" small>
              <CardButton />
            </MarkUp>
          </AddToCartButton>

          <QuickViewButton product={product}>
            <MarkUp text="QUICKVIEW" small>
              <CustomButton
                Icon={Eye}
                className={"bg-white cursor-pointer shadow-xl p-2 rounded-full"}
              />
            </MarkUp>
          </QuickViewButton>
          <AddToWishListButton product={product}>
            <MarkUp text="WISHLIST" small>
              <CustomButton
                Icon={is_in_wishlist()}
                className={"bg-white cursor-pointer shadow-xl p-2 rounded-full"}
              />
            </MarkUp>
          </AddToWishListButton>
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
