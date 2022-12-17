import SlideButton from "../../../UI/slide-button/slide-button";
import classes from "./checkout.module.scss";

const Checkout = ({ total }: { total: number }) => {
  return (
    <div className={classes.container}>
      <hr />
      <div className={classes.header}>
        <p>subtotal</p>
        <p>${total}</p>
      </div>
      <hr />
      <h3>shipping charge</h3>
      <div className={classes.input}>
        <label htmlFor="country">Country</label>
        <select name="country" id="country"></select>
      </div>
      <div className={classes.input}>
        <label htmlFor="zip">Zip/Postal code</label>
        <input type="text" id="zip" placeholder="Zip/Postal code" />
      </div>
      <p className={classes.calculate}>calculate shipping</p>
      <hr />
      <div className={classes.header}>
        <p>total</p>
        <p>${total}</p>
      </div>
      <hr />
      <div className={classes.button}>
        <SlideButton text="Proceed to Checkout" href="#" />
      </div>
    </div>
  );
};

export default Checkout;
