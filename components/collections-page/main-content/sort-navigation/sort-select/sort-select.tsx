import classes from "./sort-select.module.scss";

const SortSelect = () => {
  return (
    <div className={classes.container}>
      <label className={classes.label} htmlFor="sortBy">
        Sort by:
      </label>
      <select name="sortBy" id="sortBy" className={classes.select}>
        <option value="best-selling">Best selling</option>
        <option value="title-ascending">Alphabetically, A-Z</option>
        <option value="title-descending">Alphabetically, Z-A</option>
        <option value="price-ascending">Price, low to high</option>
        <option value="price-descending">Price, high to low</option>
      </select>
    </div>
  );
};

export default SortSelect;
