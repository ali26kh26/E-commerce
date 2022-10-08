import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShopping,
  AiOutlineMenu,
} from "react-icons/ai";
import HamburgerMenu from "./hamburger-menu/hamburger-menu";
import classes from "./options.module.scss";
const Options = () => {
  return (
    <ul className={classes.options}>
      <HamburgerMenu />
      <li>
        <span>
          <AiOutlineSearch />
        </span>
        <p> Search</p>
      </li>
      <li>
        <span>
          <AiOutlineUser />
        </span>
        <p> Account</p>
      </li>
      <li>
        <span>
          <AiOutlineHeart />{" "}
        </span>
        <p> Wishlist</p>
      </li>
      <li>
        <span>
          <AiOutlineShopping />
        </span>
        <p> My cart</p>
      </li>
    </ul>
  );
};

export default Options;
