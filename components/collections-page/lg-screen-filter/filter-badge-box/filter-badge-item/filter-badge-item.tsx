import classes from "./filter-badge-item.module.scss";

interface Props {
  title: string;
  value: string;
  onDelete: (key: string, payload: string) => void;
}

const FilterBadgeItem = ({ title, value, onDelete }: Props) => {
  return (
    <div className={classes.container} onClick={() => onDelete(title, value)}>
      <span>{value}</span>
      <span> X</span>
    </div>
  );
};

export default FilterBadgeItem;
