import { useAppDispatch } from "../../../../../hooks/hooks";
import FilterBadgeItem from "../filter-badge-item/filter-badge-item";

interface Props {
  title: string;
  values: Array<string>;
  onDelete: (key: string, payload: string) => void;
}

const FilterBadgeList = ({ title, values, onDelete }: Props) => {
  return (
    <div>
      {values.map((value) => (
        <FilterBadgeItem
          key={value}
          onDelete={onDelete}
          title={title}
          value={value}
        />
      ))}
    </div>
  );
};

export default FilterBadgeList;
