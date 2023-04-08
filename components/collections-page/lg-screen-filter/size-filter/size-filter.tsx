import { size_filter } from "../../../../features/filter/filterSlice";
import CheckBoxFilterItem from "../checkbox-filter-item/checkbox-filter-item";
import { sizeOptions } from "./size-options";
const SizeFilter = () => {
  return (
    <CheckBoxFilterItem
      dispatcher={size_filter}
      title="Size"
      options={sizeOptions}
    />
  );
};

export default SizeFilter;
