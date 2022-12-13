import product from "../../../types/product";
import { Star } from "../../icons";
import Score from "../../ProductCMP/product/Score";
import classes from "./product-detail.module.scss";
import ProductQuantity from "./product-quantity/product-quantity";
import { useState } from "react";
import PrimaryButton from "../../../UI/primary-button/primary-button";
import MarkUp from "../../../UI/markup/markup";
import DiscountBadge from "../../ProductCMP/product/discount-badge/discount-badge";
import ProductActions from "../../ProductCMP/full-width-product/product-actions/product-actions";
import SelectSize from "./select-size/select-size";
import AddToCartButton from "../../ProductCMP/product/add-to-cart-button/add-to-cart-button";
import WishlistIcon from "../../ProductCMP/full-width-product/product-actions/wishlist-icon/wishlist-icon";
import AddToWishListButton from "../../ProductCMP/product/add-to-wishlist-button/add-to-wishlist-button";
const Productetail = ({
  product,
  quickview,
}: {
  product: product;
  quickview?: boolean;
}) => {
  const [quantity, setQuantity] = useState<number>(1);
  const quantityHandler = (key: number) => {
    if (key === 1) {
      setQuantity((prev) => prev + 1);
    } else if (key === -1 && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  function calcDiscountPrice(price: number, discount: number) {
    return price - price * (discount / 100);
  }
  const summarize = (text: string) => {
    if (text.length > 35) {
      return text.slice(0, 58) + " ....";
    } else return text;
  };
  const dummy_text =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";
  return (
    <div className={classes.detail}>
      <h1>{product.name}</h1>
      {!quickview && <hr />}

      <div className={classes.detail_score}>
        <Score Star={Star} />
      </div>
      <div className={classes.detail_availability}>
        <h3>Availability:</h3>
        {product.in_stock ? (
          <p style={{ color: "green" }}>
            In Stock
            <span style={{ marginLeft: "5px" }}>
              <>&#10003;</>
            </span>
          </p>
        ) : (
          <p style={{ color: "red", marginLeft: "5px" }}>not in stock</p>
        )}
      </div>
      <div className={classes.detail_price}>
        {product.discount && (
          <span>${calcDiscountPrice(product.price, product.discount)}</span>
        )}
        <span
          style={product.discount ? { textDecoration: "line-through" } : {}}
        >
          ${product.price}
        </span>
        {product.discount && <DiscountBadge discount={product.discount} />}
      </div>
      <p className={classes.detail_description}>
        {quickview ? summarize(dummy_text) : dummy_text}
      </p>
      {quickview && <SelectSize sizes={product.size} />}
      <ProductQuantity
        quickview
        onChangeQuantity={quantityHandler}
        value={quantity}
      />
      {quickview ? (
        <div style={{ margin: "1rem 0" }}>
          <ProductActions quantity={quantity} product={product} quickview />
        </div>
      ) : (
        <div className={classes.detail_buttons}>
          <MarkUp text="WISHLIST">
            <AddToWishListButton product={product}>
              <PrimaryButton clickHandler={() => void 0}>
                <WishlistIcon product={product} />
              </PrimaryButton>
            </AddToWishListButton>
          </MarkUp>
          <AddToCartButton product={product} quantity={quantity}>
            <PrimaryButton clickHandler={() => void 0}>
              ADD TO CART
            </PrimaryButton>
          </AddToCartButton>
          <div>
            <PrimaryButton clickHandler={() => void 0}>BUY NOW</PrimaryButton>
          </div>
        </div>
      )}

      {!quickview && <hr />}
    </div>
  );
};
export default Productetail;
