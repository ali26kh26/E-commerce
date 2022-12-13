import { useAppSelector } from "../../../../../hooks/hooks";
import product from "../../../../../types/product";
import { AiOutlineClose } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";

const WishlistIcon = ({ product }: { product: product }) => {
  const wishlist = useAppSelector((state) => state.wishlist);
  const is_in_wishlist = () => {
    const index = wishlist.items.findIndex(
      (item) => item.name === product.name
    );
    if (index >= 0) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <span style={{ fontSize: "1.3rem" }}>
      {is_in_wishlist() ? <AiOutlineClose /> : <FaHeart />}
    </span>
  );
};

export default WishlistIcon;
