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
      <a>
        <p className={classes.link}> {title}</p>
      </a>
    </Link>
  );
};

export default Crumbs;
