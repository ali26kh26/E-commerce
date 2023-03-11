import product from "../../types/product";
import Banner from "./banner/Banner";
import Container from "./Category/Container";
import CountDown from "./countdown/CountDown";
import DiscoverProduct from "./discover product/discover-product";
import Fresh from "./fresh/Fresh";
import Superiority from "./Superiority/superiorityContainer";
// import TopSelling from "./top-selling/top-selling";
const TopSelling = dynamic(() => import("./top-selling/top-selling"));
import { useRef, useState, useEffect } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import dynamic from "next/dynamic";
const HomePage = ({ products }: { products: Array<product> }) => {
  const topSellingRef = useRef<HTMLDivElement>(null);
  const isTopSellingVisible = useOnScreen(topSellingRef);
  const [isTopSellingRendered, setIsTopSellingRendered] = useState(false);
  useEffect(() => {
    if (!isTopSellingRendered) {
      setIsTopSellingRendered(isTopSellingVisible);
    }
  }, [isTopSellingVisible]);
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
      <div ref={topSellingRef}>
        {(isTopSellingVisible || isTopSellingRendered) && (
          <TopSelling products={products} />
        )}
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
function LegacyRef<T>() {
  throw new Error("Function not implemented.");
}
