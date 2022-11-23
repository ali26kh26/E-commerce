import product from "../../../../types/product";
import classes from "./info-table.module.scss";

const InfoTable = ({ product }: { product: product }) => {
  return (
    <table className={classes.table}>
      <tr>
        <th>Vendor:</th>
        <td>vegist</td>
      </tr>
      <tr>
        <th>Name:</th>
        <td>{product.name}</td>
      </tr>
      <tr>
        <th>Price:</th>
        <td>${product.price}</td>
      </tr>
      <tr>
        <th>Size:</th>
        <td>{product.size.toString()}</td>
      </tr>
      <tr>
        <th>Barcode:</th>
        <td>123456789</td>
      </tr>
      <tr>
        <th>SKU:</th>
        <td>147852385-15-8</td>
      </tr>
    </table>
  );
};

export default InfoTable;
