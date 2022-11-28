import classes from "./product-actions.module.scss";
import { FaShoppingBag, FaHeart, FaEye } from "react-icons/fa";
import MarkUp from "../../../../UI/markup/markup";
import QuickViewButton from "../../product/quick-view-button/quick-view-button";
import product from "../../../../types/product";
const ProductActions = ({
  quickview,
  product,
}: {
  quickview?: boolean;
  product: product;
}) => {
  return (
    <div className={classes.action}>
      <MarkUp text="ADD TO CART">
        <div className={classes.action_items}>
          <FaShoppingBag />
        </div>
      </MarkUp>
      {!quickview && (
        <QuickViewButton product={product}>
          <MarkUp text="QUICKVIEW">
            <div className={classes.action_items}>
              <FaEye />
            </div>
          </MarkUp>
        </QuickViewButton>
      )}
      <MarkUp text="WISHLIST">
        <div className={classes.action_items}>
          <FaHeart />
        </div>
      </MarkUp>
    </div>
  );
};

export default ProductActions;
