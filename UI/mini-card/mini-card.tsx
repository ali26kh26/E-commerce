import classes from "./mini-card.module.scss";
import Image from "next/image";
import React from "react";

interface props {
  src: string;
}

const MiniCard: React.FC<props> = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <Image src={props.src} width="100%" height={120} />
      </div>
      <div className={classes.action}></div>
      <div className={classes.description}></div>
    </div>
  );
};

export default MiniCard;
