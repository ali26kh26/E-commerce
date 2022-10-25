import classes from "./product-actions.module.scss";
import { FaShoppingBag, FaHeart, FaEye } from "react-icons/fa";
const ProductActions = () => {
  return (
    <div className={classes.action}>
      <div className={classes.action_items}>
        <FaShoppingBag />
      </div>
      <div className={classes.action_items}>
        <FaEye />
      </div>
      <div className={classes.action_items}>
        <FaHeart />
      </div>
    </div>
  );
};

export default ProductActions;
