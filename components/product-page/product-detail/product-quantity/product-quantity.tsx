import classes from "./product-quantity.module.scss";
interface Props {
  value: number;
  onChangeQuantity: (key: number) => void;
}
const ProductQuantity = ({ value, onChangeQuantity }: Props) => {
  return (
    <div className={classes.container}>
      <p>Quantity:</p>
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
