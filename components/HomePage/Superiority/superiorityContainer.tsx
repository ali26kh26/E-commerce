import Item from "./Item";
import { Delivery, Cash, Online, Return } from "../../icons";

function Superiority(): JSX.Element {
  const animation = "cursor-pointer transition ease-in-out hover:scale-125"
  return (
    <>
      <div className="flex flex-1 max-w-screen-2xl justify-around  py-16">
        <div className=" flex flex-col items-center w-1/2 space-y-8 md:flex md:flex-row justify-around md:space-y-0">
          <Item
            svg={<Delivery width={50} fill={"#FF9E2C"} />}
            title={"Free Delivery"}
          />
          <Item
            svg={<Cash width={40} fill={"#EE6983"} />}
            title={"Cash On Delivery"}
          />
        </div>
        <div className="flex flex-col items-center w-1/2 space-y-8 md:flex md:flex-row md:justify-around md:space-y-0">
          <Item
            svg={<Return width={40} fill={"#319DA0"} />}
            title={"Free Delivery"}
          />
          <Item
            svg={<Online width={40} fill={"#A66CFF"} />}
            title={"Free Delivery"}
          />
        </div>
      </div>
    </>
  );
}

export default Superiority;
