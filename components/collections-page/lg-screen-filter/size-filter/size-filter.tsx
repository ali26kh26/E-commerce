import CheckBoxFilterItem from "../checkbox-filter-item/checkbox-filter-item";
import { sizeOptions } from "./size-options";
const SizeFilter = () => {
  return <CheckBoxFilterItem title="Size" options={sizeOptions} />;
};

export default SizeFilter;
