import classes from "./rating.module.scss";
import { useState } from "react";
import { BsFillStarFill, BsStar } from "react-icons/bs";
const Rating = () => {
  const [starHover, setstarHover] = useState(0);
  const [finalResult, setfinalResult] = useState(0);
  return (
    <div className={classes.container}>
      <span
        onMouseEnter={() => setstarHover(1)}
        onMouseLeave={() => setstarHover(0)}
        onClick={() => setfinalResult(1)}
      >
        {starHover > 0 || finalResult > 0 ? <BsFillStarFill /> : <BsStar />}
      </span>
      <span
        onMouseEnter={() => setstarHover(2)}
        onMouseLeave={() => setstarHover(0)}
        onClick={() => setfinalResult(2)}
      >
        {starHover > 1 || finalResult > 1 ? <BsFillStarFill /> : <BsStar />}
      </span>
      <span
        onMouseEnter={() => setstarHover(3)}
        onMouseLeave={() => setstarHover(0)}
        onClick={() => setfinalResult(3)}
      >
        {starHover > 2 || finalResult > 2 ? <BsFillStarFill /> : <BsStar />}
      </span>
      <span
        onMouseEnter={() => setstarHover(4)}
        onMouseLeave={() => setstarHover(0)}
        onClick={() => setfinalResult(4)}
      >
        {starHover > 3 || finalResult > 3 ? <BsFillStarFill /> : <BsStar />}
      </span>
      <span
        onMouseEnter={() => setstarHover(5)}
        onMouseLeave={() => setstarHover(0)}
        onClick={() => setfinalResult(5)}
      >
        {starHover > 4 || finalResult > 4 ? <BsFillStarFill /> : <BsStar />}
      </span>
    </div>
  );
};

export default Rating;
