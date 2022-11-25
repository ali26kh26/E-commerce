import Collections from "../../components/collections-page/collections";
import { getAllProducts } from "../../helpers/products-util";
import product from "../../types/product";

const CollectionPage = ({ products }: { products: Array<product> }) => {
  return <Collections products={products} />;
};

export async function getStaticProps() {
  const products = await getAllProducts();

  return {
    props: {
      products: products,
    },
  };
}

export default CollectionPage;
