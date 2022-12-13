import Image from "next/image";
import product from "../../../types/product";
import AddToCartButton from "../../ProductCMP/product/add-to-cart-button/add-to-cart-button";
import Price from "../../ProductCMP/product/Price";
import classes from "./wishlist-product.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import AddToWishListButton from "../../ProductCMP/product/add-to-wishlist-button/add-to-wishlist-button";

const WishlistProduct = ({ product }: { product: product }) => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.head}>
          <Image src={product.image} layout="fixed" width={150} height={150} />
          <h2>{product.name}</h2>
        </div>
        <div className={classes.body}>
          <AddToCartButton product={product}>
            <p role="button" className={classes.add}>
              Add to cart
            </p>
          </AddToCartButton>
          <div className={classes.price}>
            <Price value={product.price} discount={product.discount} />
            <div className={classes.price_icon}>
              <AddToWishListButton product={product}>
                <AiOutlineClose />
              </AddToWishListButton>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default WishlistProduct;
