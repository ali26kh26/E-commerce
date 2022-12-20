import Head from "next/head";
import Whishlist from "../../components/wishlist-page/wishlist";
import { useAppSelector } from "../../hooks/hooks";

const WishlistPage = () => {
  const wishlist = useAppSelector((state) => state.wishlist);
  return (
    <>
      <Head>
        <title>
          Wishlist{" "}
          {wishlist.total_items > 0 ? `(${wishlist.total_items})` : null}
          -grocery-store
        </title>
        <meta
          name="description"
          content="wishlist for your favorite groceries  "
        />
      </Head>
      <Whishlist />
    </>
  );
};

export default WishlistPage;
