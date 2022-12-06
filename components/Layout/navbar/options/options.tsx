import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShopping,
  AiOutlineMenu,
} from "react-icons/ai";
import { useAppSelector } from "../../../../hooks/hooks";
import NotificationBadge from "../../../../UI/notification/notification";
import AddToCartButton from "../../../ProductCMP/product/add-to-cart-button/add-to-cart-button";
import HamburgerMenu from "./hamburger-menu/hamburger-menu";
import classes from "./options.module.scss";
const Options = () => {
  const { cart } = useAppSelector((state) => state);
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
      <AddToCartButton>
        <NotificationBadge value={cart.total_items}>
          <li>
            <span>
              <AiOutlineShopping />
            </span>
            <p> My cart</p>
          </li>
        </NotificationBadge>
      </AddToCartButton>
    </ul>
  );
};

export default Options;
