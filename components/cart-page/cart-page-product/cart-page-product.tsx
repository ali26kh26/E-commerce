import Image from "next/image";
import Price from "../../ProductCMP/product/Price";
import classes from "./cart-page-product.module.scss";
import ProductQuantity from "../../product-page/product-detail/product-quantity/product-quantity";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import {
  decrement,
  delete_one,
  increment,
  show,
} from "../../../features/cart/cartSlice";
import cart_product from "../../../types/cart_product";
import { useEffect } from "react";
import GoToProduct from "../../ProductCMP/product/go-to-product/go-to-product";
const CartPageProduct = ({ product }: { product: cart_product }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(show(false));
  }, []);

  const changeQuanityHandler = (value: number) => {
    if (value === 1) {
      dispatch(increment({ product, quantity: 1 }));
    } else {
      dispatch(decrement(product));
    }
  };

  const removeHandler = () => {
    dispatch(delete_one(product));
  };
  return (
    <>
      <div className={classes.container}>
        <div className={classes.head}>
          <GoToProduct slug={product.slug}>
            <Image
              src={product.image}
              layout="fixed"
              width={150}
              height={150}
            />
          </GoToProduct>
          <div className={classes.title}>
            <h2>{product.name}</h2>
            <div className={classes.title_price}>
              <span>Price: </span>
              <Price value={product.price} discount={product.discount} />
            </div>
          </div>
        </div>
        <div className={classes.body}>
          <div className={classes.quantity}>
            <ProductQuantity
              onChangeQuantity={changeQuanityHandler}
              value={product.quantity}
              quickview
            />
            <p onClick={removeHandler} role="button">
              Remove{" "}
            </p>
          </div>
          <div className={classes.price}>
            <p>${product.price * product.quantity}</p>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default CartPageProduct;
