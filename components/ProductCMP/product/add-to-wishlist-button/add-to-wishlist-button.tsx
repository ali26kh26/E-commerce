import {
  add_to_wishlist,
  delete_from_wishlist,
} from "../../../../features/wishlist/wishlistSlice";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import product from "../../../../types/product";

const AddToWishListButton = ({
  children,
  product,
}: {
  children: React.ReactNode;
  product: product;
}) => {
  const dispatch = useAppDispatch();
  const wishlist = useAppSelector((state) => state.wishlist);
  const addTowishlistHandler = () => {
    if (wishlist.items.findIndex((item) => item.name === product.name) >= 0) {
      dispatch(delete_from_wishlist(product));
    } else {
      dispatch(add_to_wishlist(product));
    }
  };
  return <div onClick={addTowishlistHandler}>{children}</div>;
};

export default AddToWishListButton;
