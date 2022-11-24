import classes from "./checkbox.module.scss";

interface Props {
  title: string;
  checked: boolean;
  id: string;
  value: string;
  quantity: number;
}

const CheckBox = ({ title, checked, id, value, quantity }: Props) => {
  const classname = checked
    ? `${classes.cust_checked}`
    : `${classes.cust_check}`;
  return (
    <label htmlFor={id} title={title} className={classes.container}>
      <input
        type="checkbox"
        id={id}
        value={value}
        checked={checked}
        className={classes.input}
        readOnly
      />
      <span className={classes.fiter_name}>{title}</span>
      <span className={classes.count_check}>({quantity})</span>
      <span className={classname}></span>
    </label>
  );
};

export default CheckBox;
