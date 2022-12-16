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
      <NotificationBadge value={wishlist.total_items}>
        <li onClick={() => router.push("/wishlist")}>
          <span>
            <AiOutlineHeart />{" "}
          </span>
          <p> Wishlist</p>
        </li>
      </NotificationBadge>

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
