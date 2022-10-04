import Image from "next/image";
import React from "react";
import PlayButton from "../../../UI/play-button/play-button";
import SlideButton from "../../../UI/slide-button/slide-button";
import classes from "./banner.module.scss";
const Banner = () => {
  return (
    <div className={classes.container}>
      <div className={classes.first}>
        <Image
          src={"/assets/banner35.webp"}
          layout="responsive"
          width={500}
          height={350}
        />
        <div>
          <p>GET UP TO 30% OFF</p>
          <h1>BRUSSLES</h1>
          <h3>Foods</h3>
          <SlideButton href="/" text="Buy Now" />
        </div>
      </div>
      <div className={classes.second}>
        <Image
          src={"/assets/banner/video.webp"}
          layout="responsive"
          width={500}
          height={350}
        />
        <div>
          <h1>FRESH</h1>
          <h3>Farm</h3>
          <PlayButton />
        </div>
      </div>
    </div>
  );
};

export default Banner;
