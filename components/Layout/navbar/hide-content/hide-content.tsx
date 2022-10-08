import classes from "./hide-content.module.scss";
import { AiOutlineDown } from "react-icons/ai";

interface Props {
  title: string;
  children: React.ReactNode;
}

const HideContent = ({ title, children }: Props) => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>
        {title}
        <span>
          <AiOutlineDown />{" "}
        </span>
      </h2>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default HideContent;
