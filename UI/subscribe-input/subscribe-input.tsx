import classes from "./subscribe-input.module.scss";
import { FaArrowRight } from "react-icons/fa";
const SubscribeInput = () => {
  return (
    <div className={classes.input}>
      <input type="text" placeholder="email@example.com" />
      <div>
        <FaArrowRight />
      </div>
    </div>
  );
};

export default SubscribeInput;
