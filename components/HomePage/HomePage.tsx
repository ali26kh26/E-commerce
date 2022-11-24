import product from "../../types/product";
import Banner from "./banner/Banner";
import Container from "./Category/Container";
import CountDown from "./countdown/CountDown";
import DiscoverProduct from "./discover product/discover-product";
import Fresh from "./fresh/Fresh";
import Superiority from "./Superiority/superiorityContainer";
import TopSelling from "./top-selling/top-selling";

const HomePage = ({ products }: { products: Array<product> }) => {
  return (
    <>
      <div className="w-full p-16 flex justify-center">
        <Container />
      </div>
      <div className="w-full flex justify-center bg-stone-200">
        <Superiority />
      </div>
      {/* <div>
        <DiscoverProduct />
      </div> */}
      <div>
        <Banner />
      </div>
      <div>
        <TopSelling products={products} />
      </div>
      <div>
        <CountDown />
      </div>
      <div>
        <Fresh />
      </div>
    </>
  );
};
export default HomePage;
