import HomePage from "../components/HomePage/HomePage";
import { getAllProducts } from "../helpers/products-util";
import product from "../types/product";

const Home = ({ products }: { products: Array<product> }) => {
  return <HomePage products={products} />;
};
export async function getStaticProps() {
  const products = await getAllProducts();
  return {
    props: {
      products,
    },
  };
}
export default Home;
