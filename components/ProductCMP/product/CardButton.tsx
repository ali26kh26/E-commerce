import { BasketShopping } from "../../icons";
import classes from "./cardButton.module.scss";
function CardButton(): JSX.Element {
  return (
    <div
      className={
        `bg-white p-2 cursor-pointer  rounded-full lg:p-2 lg:bg-transparent lg:text-white ` +
        `${classes.container}`
      }
    >
      <p>
        <BasketShopping
          className={"fill-gray-800 hover:fill-amber-600 lg:hidden w-4"}
        />
      </p>

      <p style={{ boxShadow: "none" }} className="hidden  lg:inline">
        ADD TO CART
      </p>
    </div>
  );
}

export default CardButton;
