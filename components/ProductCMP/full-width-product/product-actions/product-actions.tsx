import classes from "./product-actions.module.scss";
import { FaShoppingBag, FaHeart, FaEye } from "react-icons/fa";
import MarkUp from "../../../../UI/markup/markup";
import QuickViewButton from "../../product/quick-view-button/quick-view-button";
import product from "../../../../types/product";
import AddToCartButton from "../../product/add-to-cart-button/add-to-cart-button";
import WishlistIcon from "./wishlist-icon/wishlist-icon";
import AddToWishListButton from "../../product/add-to-wishlist-button/add-to-wishlist-button";
const ProductActions = ({
  quickview,
  product,
  quantity,
}: {
  quickview?: boolean;
  product: product;
  quantity?: number;
}) => {
  return (
    <div className={classes.action}>
      <AddToCartButton quantity={quantity} product={product}>
        <MarkUp text="ADD TO CART">
          <div className={classes.action_items}>
            <FaShoppingBag />
          </div>
        </MarkUp>
      </AddToCartButton>

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
        <AddToWishListButton product={product}>
          <div className={classes.action_items}>
            <WishlistIcon product={product} />
          </div>
        </AddToWishListButton>
      </MarkUp>
    </div>
  );
};

export default ProductActions;
