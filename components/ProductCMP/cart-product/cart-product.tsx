import Image from "next/image";
import {
  decrement,
  delete_one,
  increment,
} from "../../../features/cart/cartSlice";
import { useAppDispatch } from "../../../hooks/hooks";
import cart_product from "../../../types/cart_product";
import ProductQuantity from "../../product-page/product-detail/product-quantity/product-quantity";
import classes from "./cart-product.module.scss";
import { FiTrash } from "react-icons/fi";
import GoToProduct from "../product/go-to-product/go-to-product";
const CartProduct = ({ product }: { product: cart_product }) => {
  const dispatch = useAppDispatch();
  const changeQuantityHandler = (value: number) => {
    if (value === 1) {
      dispatch(increment({ product, quantity: 1 }));
    } else {
      dispatch(decrement(product));
    }
  };
  const deleteProductHandler = () => {
    dispatch(delete_one(product));
  };
  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <GoToProduct slug={product.slug}>
          <Image
            alt={product.name}
            width={150}
            height={150}
            src={product.image}
          />
        </GoToProduct>
      </div>
      <div className={classes.content}>
        <h2>{product.name}</h2>
        <div className={classes.price}>
          <p>{product.quantity}X</p>
          <p>${product.price}</p>
        </div>
        <div className={classes.quantity}>
          <ProductQuantity
            quickview
            value={product.quantity}
            onChangeQuantity={changeQuantityHandler}
          />
          <div className={classes.delete}>
            <FiTrash onClick={deleteProductHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
