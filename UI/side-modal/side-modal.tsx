import classes from "./side-modal.module.scss";
import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
interface Props {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}
const SideModal = ({ show, setShow, children }: Props) => {
  const [open, setopen] = useState(false);
  useEffect(() => {
    setopen(show);
  }, [show]);

  const closeHandler = () => {
    setShow(false);
  };
  return (
    <div
      className={`${classes.outer} ${open ? classes.visible : ""}`}
      onClick={closeHandler}
    >
      <div
        className={`${classes.inner} ${open ? classes.fix : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <span onClick={closeHandler} className={classes.cancel}>
          <AiOutlineClose />
        </span>
      </div>
    </div>
  );
};

export default SideModal;
