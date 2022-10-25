import classes from "./filter-items.module.scss";

interface Props {
  title: string;
  children: React.ReactNode;
}
const FilterItems = ({ title, children }: Props) => {
  return (
    <div className={classes.container}>
      <h1>{title}</h1>
      <div className={classes.content}>{children} </div>
    </div>
  );
};

export default FilterItems;
