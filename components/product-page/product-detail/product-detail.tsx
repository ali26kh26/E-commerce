import product from "../../../types/product";
import { Star } from "../../icons";
import Score from "../../ProductCMP/product/Score";
import classes from "./product-detail.module.scss";
import ProductQuantity from "./product-quantity/product-quantity";
import { useState } from "react";
import PrimaryButton from "../../../UI/primary-button/primary-button";
const Productetail = ({ product }: { product: product }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const quantityHandler = (key: number) => {
    if (key === 1) {
      setQuantity((prev) => prev + 1);
    } else if (key === -1 && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  return (
    <div className={classes.detail}>
      <h1>{product.name}</h1>
      <hr />
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
      <p className={classes.detail_price}>${product.price}</p>
      <p className={classes.detail_description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>
      <ProductQuantity onChangeQuantity={quantityHandler} value={quantity} />
      <div className={classes.detail_buttons}>
        <div>
          <PrimaryButton text="&#x2764;" clickHandler={() => void 0} />
        </div>
        <div>
          <PrimaryButton text="ADD TO CART" clickHandler={() => void 0} />
        </div>
        <div>
          <PrimaryButton text="BUY NOW" clickHandler={() => void 0} />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Productetail;
