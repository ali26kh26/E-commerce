import classes from "./primary-button.module.scss";

const PrimaryButton = ({
  text,
  clickHandler,
}: {
  text: string;
  clickHandler: () => void;
}) => {
  return (
    <button onClick={clickHandler} className={classes.button}>
      <>{text}</>
    </button>
  );
};

export default PrimaryButton;
