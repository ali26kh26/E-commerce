import CheckBoxFilterItem from "../checkbox-filter-item/checkbox-filter-item";
import { materialOptions } from "./material-options";
const MaterialFilter = () => {
  return <CheckBoxFilterItem options={materialOptions} title="Material" />;
};

export default MaterialFilter;
