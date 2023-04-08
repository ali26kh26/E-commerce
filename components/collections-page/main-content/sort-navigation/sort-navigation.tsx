import classes from "./sort-navigation.module.scss";
import { IoGridOutline } from "react-icons/io5";
import { BsListTask } from "react-icons/bs";
import FilterButton from "./filter-button/filter-button";
import SortSelect from "./sort-select/sort-select";

interface Props {
  displayHandler: (value: string) => void;
  display: string;
  productsNums: number;
}

const SortNavigation = ({ displayHandler, display, productsNums }: Props) => {
  return (
    <nav className={classes.container}>
      <div className={classes.display}>
        <FilterButton productsNums={productsNums} />
        <div
          className={`${classes.display_item}  ${
            display === "grid" ? classes.active : ""
          } `}
          onClick={() => displayHandler("grid")}
        >
          <IoGridOutline />
        </div>
        <div
          className={`${classes.display_item}  ${
            display === "flex" ? classes.active : ""
          } `}
          onClick={() => displayHandler("flex")}
        >
          <BsListTask />
        </div>
      </div>
      <div className={classes.sort}>
        <SortSelect />
      </div>
    </nav>
  );
};

export default SortNavigation;
