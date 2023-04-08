import { price_filter } from "../../../../../features/filter/filterSlice";
import { useAppDispatch } from "../../../../../hooks/hooks";
import { price_state } from "../../../../../types/price_state";
import FilterBadgeList from "../filter-badge-list.tsx/filter-badge-list";

const PriceFilterBadge = ({ price }: { price: price_state }) => {
  const dispatch = useAppDispatch();
  const deleteHandler = () => {
    dispatch(price_filter({ min: 7, max: 40 }));
  };
  if (price.min === 7 && price.max === 40) {
    return null;
  }
  return (
    <FilterBadgeList
      onDelete={deleteHandler}
      title="price_filter"
      values={[`${price.min}$ - ${price.max}$`]}
    />
  );
};

export default PriceFilterBadge;
