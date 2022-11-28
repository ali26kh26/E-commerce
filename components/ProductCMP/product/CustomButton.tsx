import { BasketShopping } from "../../icons";

interface AppProps {
  Icon: Function;
  className: string;
}

function CustomButton({ Icon, className }: AppProps) {
  return (
    <div style={{ boxShadow: "0 0 20px -5px " }} className={className}>
      {<Icon className={"fill-gray-900  hover:fill-amber-600  w-4"} />}
    </div>
  );
}

export default CustomButton;
