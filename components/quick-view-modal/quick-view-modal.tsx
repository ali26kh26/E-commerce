import { quickview_show } from "../../features/quickview/quckviewSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import CenterModal from "../../UI/center-modal/center-modal";
import ProductDetailContainer from "../product-page/product-detail-container/product-detail-container";
import classes from "./quick-view-modal.module.scss";
const QuickviewModal = () => {
  const { show, product } = useAppSelector((state) => state.quickview);
  const dispatch = useAppDispatch();
  const setshow = (value: boolean) => {
    dispatch(quickview_show(value));
  };
  return (
    <CenterModal show={show} setShow={setshow}>
      <div className={classes.modal}>
        <h1>Quickview</h1>
        <hr />
        {product && <ProductDetailContainer quickview product={product} />}
      </div>
    </CenterModal>
  );
};

export default QuickviewModal;
