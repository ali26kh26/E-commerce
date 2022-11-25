import classes from "./discount-badge.module.scss";
const DiscountBadge = ({
  discount,
  relative,
}: {
  discount: number;
  relative?: boolean;
}) => {
  return (
    <span
      className={
        `${classes.container}` + " " + `${relative ? classes.relative : ""}`
      }
    >
      -{discount}%
    </span>
  );
};

export default DiscountBadge;
