import { useRouter } from "next/router";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShopping,
  AiOutlineMenu,
} from "react-icons/ai";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import NotificationBadge from "../../../../UI/notification/notification";
import AddToCartButton from "../../../ProductCMP/product/add-to-cart-button/add-to-cart-button";
import HamburgerMenu from "./hamburger-menu/hamburger-menu";
import classes from "./options.module.scss";
import { search_show } from "../../../../features/search/searchSlice";
const Options = () => {
  const { cart, wishlist } = useAppSelector((state) => state);
  const router = useRouter();
  const dispatch = useAppDispatch();
  // const [showSearchbar, setshowSearchbar] = useState(false);
  return (
    <ul className={classes.options}>
      <HamburgerMenu />
      <li onClick={() => dispatch(search_show(true))}>
        <span>
          <AiOutlineSearch />
        </span>
        <p> Search</p>
      </li>
      <li onClick={() => router.push("/account/login")}>
        <span>
          <AiOutlineUser />
        </span>
        <p> Account</p>
      </li>
      <li onClick={() => router.push("/wishlist")}>
        <span>
          <NotificationBadge value={wishlist.total_items}>
            <AiOutlineHeart />{" "}
          </NotificationBadge>
        </span>
        <p> Wishlist</p>
      </li>

      <AddToCartButton>
        <li>
          <span>
            <NotificationBadge value={cart.total_items}>
              <AiOutlineShopping />
            </NotificationBadge>
          </span>
          <p> My cart</p>
        </li>
      </AddToCartButton>
    </ul>
  );
};

export default Options;
