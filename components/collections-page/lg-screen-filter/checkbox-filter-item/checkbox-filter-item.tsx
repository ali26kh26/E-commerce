import React, { useState } from "react";
import option from "../../../../types/checkbox-options";
import CheckBox from "../../../../UI/checkbox/checkbox";
import FilterItems from "../filter-items/filter-items";
import classes from "./checkbox-filter-item.module.scss";

interface Props {
  title: string;
  options: option[];
}
interface initialValue {
  [key: string]: boolean;
}
const CheckBoxFilterItem = ({ title, options }: Props) => {
  const optionValues = options.reduce(
    (acc, curr) => ({ ...acc, [curr.title]: false }),
    {}
  );
  const [values, setValues] = useState<initialValue>(optionValues);
  const clickHandler = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    key: string
  ) => {
    e.preventDefault();
    let clone = values;
    const selected = values[key];
    clone[key] = !selected;
    setValues({ ...clone });
  };
  return (
    <FilterItems title={title}>
      <div className={classes.container}>
        <div className={classes.head}>
          <p>0 selected</p>
          <div>Reset</div>
        </div>
        <ul className={classes.content}>
          {options.map((item) => (
            <li key={item.id} onClick={(e) => clickHandler(e, item.title)}>
              <CheckBox {...item} checked={values[item.title]} />
            </li>
          ))}
        </ul>
      </div>
    </FilterItems>
  );
};

export default CheckBoxFilterItem;
