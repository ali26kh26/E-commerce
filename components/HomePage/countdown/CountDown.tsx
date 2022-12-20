import Image from "next/image";
import SlideButton from "../../../UI/slide-button/slide-button";
import classes from "./countDown.module.scss";
import Timer from "./timer/timer";

const CountDown = () => {
  return (
    <div className={classes.container}>
      <Image
        src={"/assets/background/background1.webp"}
        layout="fill"
        className={classes.image}
        objectFit="cover"
        objectPosition="center"
      />
      <div className={classes.content}>
        <p>We offer a hot deal offer every festival </p>
        <h1>Deal of the day!</h1>
        <Timer />
        <SlideButton text="shop collection" href="/collections" />
      </div>
    </div>
  );
};

export default CountDown;
