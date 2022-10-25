import classes from "./Arrow-button.module.scss";

interface Props {
  direction: string;
  scrollHandler: (direction: string) => void;
}

const ArrowButton = ({ direction, scrollHandler }: Props) => {
  const posistion = direction === "left" ? { left: "10px" } : { right: "10px" };
  return (
    <div
      style={posistion}
      className={classes.container}
      onClick={() => scrollHandler(direction)}
    >
      {direction === "left" ? <>&lsaquo;</> : <>&rsaquo;</>}
    </div>
  );
};

export default ArrowButton;
