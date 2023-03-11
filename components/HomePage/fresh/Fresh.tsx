import Image from "next/image";
import SlideButton from "../../../UI/slide-button/slide-button";
import classes from "./fresh.module.scss";

const Fresh = () => {
  return (
    <div className={classes.container}>
      <div className={classes.inner}>
        <div className={classes.image}>
          <Image
            alt="vegist"
            src={"/assets/vegist-image.webp"}
            layout="responsive"
            width={700}
            height={500}
          />
        </div>
        <div className={classes.content}>
          <h3>FRESH AND DELICIOUS</h3>
          <div>
            <h1>FRESH ORGANIC</h1>
            <h2>Grocery store</h2>
          </div>
          <p>
            here variations of passages of Lorem Ipsum available, but the
            majority have suffered alteration in some by injected humour,
            randomised words which don't look even slightly believable.
          </p>
          <div className={classes.button}>
            <SlideButton href="/collections" text="SHOP NOW" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fresh;
