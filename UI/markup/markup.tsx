import classes from "./markup.module.scss";
import { useState } from "react";
interface Props {
  children: React.ReactNode;
  text: string;
  small?: boolean;
}

const MarkUp = ({ children, text, small }: Props) => {
  const [showMarkup, setshowMarkup] = useState(false);
  return (
    <div
      className={classes.outer}
      onMouseEnter={() => setshowMarkup((prev) => true)}
      onMouseLeave={() => setshowMarkup((prev) => false)}
    >
      {showMarkup && (
        <>
          <div
            onMouseEnter={() => setshowMarkup((prev) => false)}
            className={
              `${classes.markup} ` +
              " " +
              `${small === true ? classes.small : ""}`
            }
          >
            {text}
          </div>
        </>
      )}
      <div>{children}</div>
    </div>
  );
};

export default MarkUp;
