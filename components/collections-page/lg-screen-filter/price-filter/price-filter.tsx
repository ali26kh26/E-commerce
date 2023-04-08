import { price_filter } from "../../../../features/filter/filterSlice";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import TwoRangeSlider from "../../../../UI/two-range-slider/two-range-slider";
import FilterItems from "../filter-items/filter-items";

const PriceFilter = () => {
  const dispatch = useAppDispatch();
  return (
    <FilterItems title="Price">
      <TwoRangeSlider
        min={7}
        max={40}
        onChange={(values) => dispatch(price_filter(values))}
      />
    </FilterItems>
  );
};

export default PriceFilter;
