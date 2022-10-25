import CheckBoxFilterItem from "../checkbox-filter-item/checkbox-filter-item";
import { availabilityOptions } from "./availability-options";
const AvailabilityFilter = () => {
  return (
    <CheckBoxFilterItem options={availabilityOptions} title="Avaiilability" />
  );
};

export default AvailabilityFilter;
