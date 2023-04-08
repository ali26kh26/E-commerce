import { material_filter } from "../../../../features/filter/filterSlice";
import CheckBoxFilterItem from "../checkbox-filter-item/checkbox-filter-item";
import { materialOptions } from "./material-options";
const MaterialFilter = () => {
  return (
    <CheckBoxFilterItem
      dispatcher={material_filter}
      options={materialOptions}
      title="Material"
    />
  );
};

export default MaterialFilter;
