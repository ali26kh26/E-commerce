import classes from "./scroll-top.module.scss";
import { FaAngleDoubleUp } from "react-icons/fa";
import { useState } from "react";
const ScrollTop = () => {
  const scrollHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  //   console.log(window.screenY);
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  window.addEventListener("scroll", toggleVisible);
  return (
    <div
      style={{ display: visible ? "flex" : "none" }}
      onClick={scrollHandler}
      className={classes.container}
    >
      <FaAngleDoubleUp />
    </div>
  );
};

export default ScrollTop;
