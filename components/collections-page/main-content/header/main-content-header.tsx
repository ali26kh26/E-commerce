import Image from "next/image";
import classes from "./main-content-header.module.scss";

const MainCintentHeader = ({ value }: { value: number }) => {
  return (
    <div className={classes.container}>
      <h1>Fresh Fruits ({value})</h1>
      <Image
        layout="responsive"
        src="/assets/banner/collection-banner.webp"
        width={800}
        height={200}
        quality={100}
      />
    </div>
  );
};

export default MainCintentHeader;
