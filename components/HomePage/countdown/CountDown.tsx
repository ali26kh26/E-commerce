import Image from "next/image";
import SlideButton from "../../../UI/slide-button/slide-button";
import classes from "./countDown.module.scss";
import Timer from "./timer/timer";

const CountDown = () => {
  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <Image
          src={"/assets/background/background1.webp"}
          layout="responsive"
          alt=""
          width={1100}
          height={400}
          className={classes.image}
        />
      </div>

      <div className={classes.content}>
        <p>We offer a hot deal offer every festival </p>
        <h1>Deal of the day!</h1>
        <Timer initialDays={3} />
        <SlideButton text="shop collection" href="/" />
      </div>
    </div>
  );
};

export default CountDown;
