import SingleBox from "./single-box/single-box";
import { BsTruck, BsCurrencyDollar, BsCardChecklist } from "react-icons/bs";
import classes from "./product-delivery.module.scss";
const ProductDelivery = () => {
  return (
    <div className={classes.container}>
      <SingleBox
        Icon={() => <BsTruck />}
        title="DELIVERY INFO"
        text="From then, delivery is generally within 2-10 days, depending on your location"
      />
      <SingleBox
        Icon={() => <BsCurrencyDollar />}
        title="30 DAYS RETURNS"
        text="Not the right fit? No worries. We'll arrange pick up and a full refund within 7 days including the delivery fee."
      />
      <SingleBox
        Icon={() => <BsCardChecklist />}
        title="10 YEAR WARRANTY"
        text="Quality comes first and our products are designed to last."
      />
    </div>
  );
};

export default ProductDelivery;
