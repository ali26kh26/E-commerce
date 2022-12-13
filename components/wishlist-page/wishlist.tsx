import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import WishlistProduct from "./wishlist-product/wishlist-product";
import classes from "./wishlist.module.scss";
import Link from "next/link";
import { clear_wishlist } from "../../features/wishlist/wishlistSlice";
import EmptyWishList from "./empty-wishlist/empty-wishlist";
const Whishlist = () => {
  const wishlist = useAppSelector((state) => state.wishlist);
  const dispatch = useAppDispatch();
  const clearHandler = () => {
    dispatch(clear_wishlist());
  };
  if (wishlist.total_items === 0) {
    return <EmptyWishList />;
  }
  return (
    <div className={classes.container}>
      <hr />
      <header>
        <p>MY WISHLIST:</p>
        <p>{wishlist.total_items} Items</p>
      </header>
      <hr />
      {wishlist.items.map((item, index) => (
        <WishlistProduct key={index} product={item} />
      ))}
      <div className={classes.actions}>
        <p>
          <Link href="/collections">Continue Shopping</Link>
        </p>
        <p onClick={clearHandler}>Clear Wshlist</p>
      </div>
      <hr />
    </div>
  );
};

export default Whishlist;
