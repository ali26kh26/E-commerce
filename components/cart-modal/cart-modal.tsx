import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import SideModal from "../../UI/side-modal/side-modal";
import { show as showDispatch } from "../../features/cart/cartSlice";
import classes from "./cart-modal.module.scss";
import SlideButton from "../../UI/slide-button/slide-button";
import CartProduct from "../ProductCMP/cart-product/cart-product";
const CartModal = () => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const setshow = (value: boolean) => {
    dispatch(showDispatch(value));
  };
  if (cart.total_items === 0) {
    return (
      <SideModal setShow={setshow} show={cart.show}>
        <p>No product in cart</p>
      </SideModal>
    );
  }

  return (
    <SideModal setShow={setshow} show={cart.show}>
      <div className={classes.modal}>
        <div className={classes.top}>
          <h2>
            There are <span>{cart.total_items}</span> products
          </h2>
          <hr />

          <div className={classes.items}>
            {cart.items.map((item, index) => (
              <div key={index}>
                <CartProduct product={item} />
              </div>
            ))}
          </div>
        </div>

        <div className={classes.bottom}>
          <hr />
          <div className={classes.total}>
            <p>Sub Total:</p>
            <p>${cart.total_price}</p>
          </div>
          <hr />
          <div className={classes.buttons}>
            <SlideButton text="View Cart" href="/cart" />
            <SlideButton text="Checkout" href="#" />
          </div>
        </div>
      </div>
    </SideModal>
  );
};

export default CartModal;
