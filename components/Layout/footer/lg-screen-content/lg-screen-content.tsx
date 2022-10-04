import classes from "./lg-screen-content.module.scss";

const LgScreenContent = () => {
  return (
    <>
      <div className={classes.content}>
        <h2>SERVICES</h2>
        <ul>
          <li>Fresh Fruits</li>
          <li>Fresh Meat</li>
          <li>Cow Milk</li>
          <li>Haldi powder</li>
          <li>Sea & Fish</li>
        </ul>
      </div>
      <div className={classes.content}>
        <h2>PRIVACY & TERMS</h2>
        <ul>
          <li>My cart</li>
          <li>Wishlist</li>
          <li>Sign in</li>
          <li>Shipping details</li>
          <li>Help center</li>
        </ul>
      </div>
      <div className={classes.content}>
        <h2>MY ACCOUNT</h2>
        <ul>
          <li>About vegist</li>
          <li>Faq's</li>
          <li>Contact us</li>
          <li>News</li>
          <li>Store location</li>
        </ul>
      </div>
    </>
  );
};

export default LgScreenContent;
