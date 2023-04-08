import { availibilty_filter } from "../../../../features/filter/filterSlice";
import CheckBoxFilterItem from "../checkbox-filter-item/checkbox-filter-item";
import { availabilityOptions } from "./availability-options";
const AvailabilityFilter = () => {
  return (
    <CheckBoxFilterItem
      dispatcher={availibilty_filter}
      options={availabilityOptions}
      title="Availability"
    />
  );
};

export default AvailabilityFilter;
