import classes from "./bread-crumbs.module.scss";
import { useRouter } from "next/router";
import Crumbs from "./crumbs/crumbs";
const BreadCrumbs = () => {
  const router = useRouter();
  console.log(router.pathname);
  if (router.pathname === "/") {
    return <div></div>;
  }
  function generateBreadcrumbs() {
    const asPathWithoutQuery = router.asPath.split("?")[0];
    const asPathNestedRoutes = asPathWithoutQuery
      .split("/")
      .filter((v) => v.length > 0);

    const crumblist = asPathNestedRoutes.map((subpath, idx) => {
      const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
      const title = subpath[0].toUpperCase() + subpath.substring(1);
      return { href, title };
    });
    return [{ href: "/", title: "Home" }, ...crumblist];
  }
  const breadCrumbs = generateBreadcrumbs();
  return (
    <nav className={classes.container}>
      {breadCrumbs.map((crumb, id) => (
        <Crumbs {...crumb} key={id} last={id === breadCrumbs.length - 1} />
      ))}
    </nav>
  );
};

export default BreadCrumbs;
