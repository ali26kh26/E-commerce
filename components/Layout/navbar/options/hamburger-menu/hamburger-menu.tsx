import classes from "./hamburger-menu.module.scss";
import { AiOutlineMenu } from "react-icons/ai";
import SideModal from "../../../../../UI/side-modal/side-modal";
import { useState } from "react";
import Collapsible from "../../../../../UI/collapsible/collapsible";
const HamburgerMenu = () => {
  const [showModal, setshowModal] = useState(false);

  return (
    <li>
      <span
        onClick={() => setshowModal((prev) => !prev)}
        className={classes.menu}
      >
        <AiOutlineMenu />
      </span>
      <SideModal show={showModal} setShow={setshowModal}>
        <Collapsible title="SHOP" open={false}>
          <ul className={classes.content}>
            <li>
              <Collapsible title="Fresh Food" open={false}>
                <ul className={classes.content + " " + classes.inner_content}>
                  <li>Fresh apple (5kg)</li>
                  <li>Fresh blueberry</li>
                  <li>Fresh carrot natural free</li>
                  <li>Fresh grassben</li>
                </ul>
              </Collapsible>
            </li>
            <li>
              <Collapsible title="Fresh Food" open={false}>
                <ul className={classes.content + " " + classes.inner_content}>
                  <li>Fresh apple (5kg)</li>
                  <li>Fresh blueberry</li>
                  <li>Fresh carrot natural free</li>
                  <li>Fresh grassben</li>
                </ul>
              </Collapsible>
            </li>
            <li>
              <Collapsible title="Fresh Food" open={false}>
                <ul className={classes.content + " " + classes.inner_content}>
                  <li>Fresh apple (5kg)</li>
                  <li>Fresh blueberry</li>
                  <li>Fresh carrot natural free</li>
                  <li>Fresh grassben</li>
                </ul>
              </Collapsible>
            </li>
          </ul>
        </Collapsible>
        <Collapsible title="PAGES" open={false}>
          <ul className={classes.content + " " + classes.inner_content}>
            <li>sdfsdfs</li>
            <li>sdfsdfs</li>
            <li>sdfsdfs</li>
          </ul>
        </Collapsible>
      </SideModal>
    </li>
  );
};

export default HamburgerMenu;
