import Image from "next/future/image";
import { useState } from "react";

function Img(): JSX.Element {
  return (
    <Image
      className=" transition"
      priority
      src={"/assets/category-banner.png"}
      alt={""}
      width={500}
      height={700}
    />
  );
}

export default Img;
