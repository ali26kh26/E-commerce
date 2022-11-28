import { ReactNode, useState } from "react";
import product from "../../../../types/product";
import CenterModal from "../../../../UI/center-modal/center-modal";
import ProductDetailContainer from "../../../product-page/product-detail-container/product-detail-container";
import classes from "./quick-view-button.module.scss";

const QuickViewButton = ({
  product,
  children,
}: {
  product: product;
  children: ReactNode;
}) => {
  const [showBox, setshowBox] = useState(false);
  return (
    <>
      <div onClick={() => setshowBox((prev) => !prev)}>{children}</div>
      <CenterModal show={showBox} setShow={setshowBox}>
        <div className={classes.modal}>
          <h1>Quickview</h1>
          <hr />
          <ProductDetailContainer quickview product={product} />
        </div>
      </CenterModal>
    </>
  );
};

export default QuickViewButton;
