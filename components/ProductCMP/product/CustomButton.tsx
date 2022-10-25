import { BasketShopping } from "../../icons";

interface AppProps {
  Icon: Function;
  className: string;
}

function CustomButton({ Icon, className }: AppProps) {
  return (
    <div className={className}>
      {<Icon className={"fill-gray-700  hover:fill-amber-500  w-6"} />}
    </div>
  );
}

export default CustomButton;
