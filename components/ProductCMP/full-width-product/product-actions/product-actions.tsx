import classes from "./product-actions.module.scss";
import { FaShoppingBag, FaHeart, FaEye } from "react-icons/fa";
import MarkUp from "../../../../UI/markup/markup";
const ProductActions = () => {
  return (
    <div className={classes.action}>
      <MarkUp text="ADD TO CART">
        <div className={classes.action_items}>
          <FaShoppingBag />
        </div>
      </MarkUp>
      <MarkUp text="QUICKVIEW">
        <div className={classes.action_items}>
          <FaEye />
        </div>
      </MarkUp>
      <MarkUp text="WISHLIST">
        <div className={classes.action_items}>
          <FaHeart />
        </div>
      </MarkUp>
    </div>
  );
};

export default ProductActions;
