import Link from "next/link";
import classes from "./slide-button.module.scss";

interface Props {
  text: string;
  href?: string;
  clickHandler?: () => void;
}
const SlideButton = ({ text, href, clickHandler }: Props) => {
  if (href) {
    return (
      <Link href={href}>
        <div className={classes.container}>{text}</div>
      </Link>
    );
  } else {
    return (
      <div onClick={clickHandler} className={classes.container}>
        {text}
      </div>
    );
  }
};

export default SlideButton;
