import {
  size_filter as sizeDisaptcher,
  material_filter as materialDispatcher,
  availibilty_filter as availibiltyDispatcher,
} from "../../../../features/filter/filterSlice";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import FilterBadgeList from "./filter-badge-list.tsx/filter-badge-list";
import PriceFilterBadge from "./price-filter-badge/price-filter-badge";

const FilterBadgeBox = () => {
  const { availibilty_filter, material_filter, size_filter, price } =
    useAppSelector((state) => state.fiter);
  const dispatch = useAppDispatch();

  const filter_dispatchs: { [index: string]: any } = {
    size_filter: sizeDisaptcher,
    material_filter: materialDispatcher,
    availibilty_filter: availibiltyDispatcher,
  };
  const deleteHandler = (key: string, payload: string) => {
    dispatch(filter_dispatchs[key](payload));
  };
  return (
    <div>
      <FilterBadgeList
        onDelete={deleteHandler}
        title="size_filter"
        values={size_filter}
      />
      <FilterBadgeList
        onDelete={deleteHandler}
        title="material_filter"
        values={material_filter}
      />
      <FilterBadgeList
        onDelete={deleteHandler}
        title="availibilty_filter"
        values={availibilty_filter}
      />
      <PriceFilterBadge price={price} />
    </div>
  );
};

export default FilterBadgeBox;
