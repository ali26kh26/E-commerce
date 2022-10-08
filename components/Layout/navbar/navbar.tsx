import classes from "./navbar.module.scss";
import Logo from "../../icons/Logo";
// import Links from "./links/links";
import AboutUs from "./about-us/about-us";
import Options from "./options/options";

const NavBar = () => {
  return (
    <>
      <AboutUs />
      <nav className={classes.navbar}>
        <ul>
          <li className={classes.logo}>
            <Logo />
          </li>
          <li className={classes.links}>{/* <Links /> */}</li>
          <li className={classes.options}>
            <Options />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
