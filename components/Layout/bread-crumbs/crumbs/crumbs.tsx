import Link from "next/link";
import classes from "./crumbs.module.scss";
interface Props {
  href: string;
  title: string;
  last: boolean;
}
const Crumbs = ({ href, title, last = false }: Props) => {
  if (last) {
    return <p className={classes.last}>{title}</p>;
  }
  return (
    <Link href={href}>
      <p className={classes.link}> {title}</p>
    </Link>
  );
};

export default Crumbs;
