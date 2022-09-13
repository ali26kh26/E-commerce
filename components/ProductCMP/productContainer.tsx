import Img from "./product/img";
import CardButton from "./product/CardButton";
import Title from "./product/title";
import Score from "./product/Score";
import Price from "./product/Price";
import CustomButton from "./product/CustomButton";
import { Eye, Heart, Star } from "../icons";
import { useState } from "react";

function productContainer(): JSX.Element {
  return (
    <div className="w-fit flex flex-col items-center bg-slate-100">
      {/* big screen */}
      <CustomButton
        Icon={Eye}
        className={
          " bg-white p-2.5 rounded-full hidden lg:block absolute z-10 self-start"
        }
      />
      <CustomButton
        Icon={Heart}
        className={
          "bg-white p-2.5 rounded-full hidden lg:block absolute z-10 self-start"
        }
      />
      {/* big screen */}
      <Img src={"/assets/productIMG/onion_1024x1024.webp"} />
      <div className="w-full flex flex-row-reverse justify-center gap-2 mt-3">
        <CardButton />
        <CustomButton
          Icon={Eye}
          className={"bg-white p-2.5 rounded-full lg:hidden"}
        />
        <CustomButton
          Icon={Heart}
          className={"bg-white p-2.5 rounded-full lg:hidden"}
        />
      </div>
      <div className=" mt-8 text-center space-y-2">
        <Title title={"purple onion"} />
        <Score Star={Star} />
        <Price value={"20.00"} />
      </div>
    </div>
  );
}

export default productContainer;
