import Img from "./Img";
import Items from "./Items";

function Container(): JSX.Element {
  return (
    <div className="flex flex-1 max-w-screen-2xl">
      <div className=" hidden md:flex box-border w-1/2  items-center justify-center">
        <Img />
      </div>
      <div className="w-full h-full flex flex-col justify-evenly items-center md:w-2/3 ">
        <h1 className="max-h-1/3 text-2xl font-bold text-center xl:text-4xl">The best trusted farms <br/> in the world</h1>
        <Items />
      </div>
    </div>
  );
}

export default Container;
