import classes from "./product-quantity.module.scss";
interface Props {
  value: number;
  onChangeQuantity: (key: number) => void;
  quickview?: boolean;
}
const ProductQuantity = ({ value, onChangeQuantity, quickview }: Props) => {
  return (
    <div className={classes.container}>
      {!quickview && <p>Quantity:</p>}
      <div>
        <div
          className={classes.handler}
          style={{ borderRight: "1px solid #ccc" }}
          onClick={() => onChangeQuantity(-1)}
        >
          -
        </div>
        <div>{value}</div>
        <div
          className={classes.handler}
          style={{ borderLeft: "1px solid #ccc" }}
          onClick={() => onChangeQuantity(1)}
        >
          +
        </div>
      </div>
    </div>
  );
};

export default ProductQuantity;
