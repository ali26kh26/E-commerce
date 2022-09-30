import Link from "next/link";
import classes from "./slide-button.module.scss";

interface Props {
  text: string;
  href: string;
}
const SlideButton = ({ text, href }: Props) => {
  return (
    <div className={classes.container}>
      <Link href={href}>{text}</Link>
    </div>
  );
};

export default SlideButton;
