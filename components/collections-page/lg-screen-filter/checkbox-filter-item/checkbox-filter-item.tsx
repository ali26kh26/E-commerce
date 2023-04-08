import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import option from "../../../../types/checkbox-options";
import CheckBox from "../../../../UI/checkbox/checkbox";
import FilterItems from "../filter-items/filter-items";
import classes from "./checkbox-filter-item.module.scss";

interface Props {
  title: string;
  options: option[];
  dispatcher: any;
}
interface initialValue {
  [key: string]: boolean;
}
const CheckBoxFilterItem = ({ title, options, dispatcher }: Props) => {
  const dispatch = useAppDispatch();
  const optionValues = options.reduce(
    (acc, curr) => ({ ...acc, [curr.title]: false }),
    {}
  );
  const [values, setValues] = useState<initialValue>(optionValues);

  const filter: { [index: string]: any } = useAppSelector(
    (state) => state.fiter
  );

  const filter_options: { [index: string]: any } = {
    Material: "material_filter",
    Size: "size_filter",
    Availability: "availibilty_filter",
  };
  useEffect(() => {
    if (filter) {
      let clone = { ...values };
      Object.keys(clone).forEach((item) => {
        if (filter[filter_options[title]]?.includes(item)) {
          clone[item] = true;
        } else {
          clone[item] = false;
        }
      });

      setValues(clone);
    }
  }, [filter]);

  let selectedNumber = 0;
  if (values) {
    selectedNumber = Object.values(values).filter(
      (value) => value == true
    ).length;
  }

  const clickHandler = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    key: string
  ) => {
    e.preventDefault();
    let clone = values;
    const selected = values[key];
    clone[key] = !selected;
    setValues({ ...clone });

    dispatch(dispatcher(key));
  };

  const resetHandler = () => {
    dispatch(dispatcher("reset"));
  };

  return (
    <FilterItems title={title}>
      <div className={classes.container}>
        <div className={classes.head}>
          <p>{selectedNumber} selected</p>
          <div onClick={resetHandler}>Reset</div>
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
