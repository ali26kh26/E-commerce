import TimeBox from "../time-box/time-box";
import classes from "./time-box-list.module.scss";

interface Props {
  day: number;
  hour: number;
  minute: number;
  second: number;
}

const TimeBoxList = ({ day, hour, minute, second }: Props) => {
  return (
    <div className={classes.container}>
      <TimeBox label="DAY" value={day} />
      <span>:</span>
      <TimeBox label="HRS" value={hour} />
      <span>:</span>
      <TimeBox label="MIN" value={minute} />
      <span>:</span>
      <TimeBox label="SEC" value={second} />
    </div>
  );
};

export default TimeBoxList;
