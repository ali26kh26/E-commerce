import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import classes from "./cart-page.module.scss";
import CartPageProduct from "./cart-page-product/cart-page-product";
import { clear_cart } from "../../features/cart/cartSlice";
import SlideButton from "../../UI/slide-button/slide-button";
import EmptyList from "../wishlist-page/empty-list/empty-list";
import Checkout from "./checkout/checkout";
const CartPage = () => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const clearHandler = () => {
    dispatch(clear_cart());
  };
  // if (cart.total_items === 0) {
  //   return <EmptyList cart />;
  // }
  return (
    <div className={classes.container}>
      <div className={classes.cart}>
        <hr />
        <header>
          <p>MY CART:</p>
          <p>{cart.total_items} Items</p>
        </header>
        <hr />
        {cart.items.map((item, index) => (
          <CartPageProduct key={index} product={item} />
        ))}
        <div className={classes.actions}>
          <div className={classes.actions_buttons}>
            <SlideButton
              href="/collections"
              text="Continue Shopping"
            ></SlideButton>
          </div>
          <div className={classes.actions_buttons}>
            <SlideButton clickHandler={clearHandler} text="Clear Wishlist" />
          </div>
        </div>
        <hr />
      </div>
      <Checkout total={cart.total_price} />
    </div>
  );
};

export default CartPage;
