import classes from "./select-size.module.scss";

const SelectSize = ({ sizes }: { sizes: Array<string> }) => {
  return (
    <div className={classes.container}>
      <h3>Size</h3>
      <select name="size" id="">
        {sizes.map((size, index) => (
          <option key={index} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectSize;
