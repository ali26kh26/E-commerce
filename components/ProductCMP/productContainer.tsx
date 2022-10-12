import Img from "./product/img";
import CardButton from "./product/CardButton";
import Title from "./product/title";
import Score from "./product/Score";
import Price from "./product/Price";
import CustomButton from "./product/CustomButton";
import { Eye, Heart, Star } from "../icons";
import React, { useEffect, useRef } from "react";
import style from "./animation.module.css";

interface props {
  title: string;
  image: string;
  price: number;
}

function productContainer({ title, image, price }: props): JSX.Element {
  const customButton = useRef<HTMLDivElement>(null);
  const cardButton = useRef<HTMLDivElement>(null);

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
      className="w-fit h-fit flex flex-col items-center bg-white"
    >
      <div className=" bg-white relative overflow-hidden">
        {/* big screen */}
        <div ref={customButton} className={style.customButtom}>
          <CustomButton
            Icon={Heart}
            className={"bg-white p-2.5 rounded-full"}
          />
          <CustomButton Icon={Eye} className={" bg-white p-2.5 rounded-full"} />
        </div>

        {/* Image */}
        <Img src={"/assets/productIMG/onion_1024x1024.webp"} />

        {/* big screen */}
        <div ref={cardButton} className={style.cardButtom}>
          <CardButton />
        </div>

        {/* Small screen */}
        <div className="w-full flex flex-row-reverse justify-center gap-2 mt-3 lg:hidden">
          <CardButton />
          <CustomButton Icon={Eye} className={"bg-white p-2.5 rounded-full"} />
          <CustomButton
            Icon={Heart}
            className={"bg-white p-2.5 rounded-full"}
          />
        </div>
      </div>

      {/* title */}
      <div className=" mt-2 h-1/3 text-center space-y-2">
        <Title title={"purple onion"} />
        <Score Star={Star} />
        <Price value={"20.00"} />
      </div>
    </div>
  );
}

export default productContainer;
