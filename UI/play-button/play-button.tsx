import classes from "./play-button.module.scss";

const PlayButton = () => {
  return (
    <div className={classes.container}>
      <div className={classes.outer}>
        <div>
          <>&Delta;</>
        </div>
      </div>
      <div className={classes.inner}></div>
    </div>
  );
};

export default PlayButton;
