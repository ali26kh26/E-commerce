import classes from "./time-box.module.scss";

interface Props {
  value: number;
  label: string;
}

const TimeBox = ({ value, label }: Props) => {
  return (
    <div className={classes.container}>
      <p>{value}</p>
      <p>{label}</p>
    </div>
  );
};

export default TimeBox;
