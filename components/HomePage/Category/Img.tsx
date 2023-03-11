import Image from "next/image";
import { useState } from "react";

function Img(): JSX.Element {
  return (
    <Image
      className=" transition"
      priority
      src={"/assets/category-banner.png"}
      alt="banner"
      width={500}
      height={700}
    />
  );
}

export default Img;
