import { IconType } from "react-icons/lib";
import classes from "./primary-button.module.scss";

const PrimaryButton = ({
  clickHandler,
  children,
}: {
  clickHandler: () => void;
  children: React.ReactNode;
}) => {
  return (
    <button onClick={clickHandler} className={classes.button}>
      {children}
    </button>
  );
};

export default PrimaryButton;
