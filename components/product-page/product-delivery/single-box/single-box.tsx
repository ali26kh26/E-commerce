import { IconType } from "react-icons/lib";
import classes from "./single-box.module.scss";

interface Props {
  Icon: IconType;
  title: string;
  text: string;
}
const SingleBox = ({ Icon, title, text }: Props) => {
  return (
    <div className={classes.container}>
      <div>
        <Icon />
      </div>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};

export default SingleBox;
