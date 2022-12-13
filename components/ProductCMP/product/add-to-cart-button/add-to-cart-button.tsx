import { increment, show } from "../../../../features/cart/cartSlice";
import { useAppDispatch } from "../../../../hooks/hooks";
import product from "../../../../types/product";

const AddToCartButton = ({
  children,
  product,
  quantity,
}: {
  children: React.ReactNode;
  product?: product;
  quantity?: number;
}) => {
  const dispatch = useAppDispatch();
  const addToCartHandler = () => {
    if (product) {
      if (quantity) {
        dispatch(increment({ product, quantity: quantity }));
      } else {
        dispatch(increment({ product, quantity: 1 }));
      }
    }
    dispatch(show(true));
  };
  return <div onClick={() => addToCartHandler()}>{children}</div>;
};

export default AddToCartButton;
