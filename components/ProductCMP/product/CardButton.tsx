import {BasketShopping} from '../../icons'

function CardButton(): JSX.Element {
  return (
    <div className="bg-white p-2.5 rounded-full lg:p-4 lg:bg-transparent lg:text-white">
      <BasketShopping className={"fill-gray-700 hover:fill-amber-500 lg:hidden w-6"} />
      <p className="hidden lg:inline">ADD TO CART</p>
    </div>
  );
}

export default CardButton;
