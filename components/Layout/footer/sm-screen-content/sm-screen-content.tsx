import Collapsible from "../../../../UI/collapsible/collapsible";
import classes from "./sm-screen.module.scss";
const SmScreenContent = () => {
  return (
    <div className={classes.container}>
      <Collapsible title="SERVICES" open={false}>
        <div className={classes.content}>
          <ul>
            <li>Fresh Fruits</li>
            <li>Fresh Meat</li>
            <li>Cow Milk</li>
            <li>Haldi powder</li>
            <li>Sea & Fish</li>
          </ul>
        </div>
      </Collapsible>
      <Collapsible title="PRIVACY & TERMS" open={false}>
        <div className={classes.content}>
          <ul>
            <li>My cart</li>
            <li>Wishlist</li>
            <li>Sign in</li>
            <li>Shipping details</li>
            <li>Help center</li>
          </ul>
        </div>
      </Collapsible>
      <Collapsible title="MY ACCOUNT" open={false}>
        <div className={classes.content}>
          <ul>
            <li>About vegist</li>
            <li>Faq's</li>
            <li>Contact us</li>
            <li>News</li>
            <li>Store location</li>
          </ul>
        </div>
      </Collapsible>
    </div>
  );
};

export default SmScreenContent;
