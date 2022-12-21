import { ReactNode } from "react";
import {
  quickview_product,
  quickview_show,
} from "../../../../features/quickview/quckviewSlice";
import { useAppDispatch } from "../../../../hooks/hooks";
import product from "../../../../types/product";
const QuickViewButton = ({
  product,
  children,
}: {
  product: product;
  children: ReactNode;
}) => {
  const dispatch = useAppDispatch();
  const clickHandler = () => {
    dispatch(quickview_show(true));
    dispatch(quickview_product(product));
  };
  return <div onClick={clickHandler}>{children}</div>;
};

export default QuickViewButton;
