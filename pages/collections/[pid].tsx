import ProductPage from "../../components/product-page/product-page";
import { getSingleProduct } from "../../helpers/products-util";
import product from "../../types/product";

interface Props {
  product: product;
}

const SingleProductPage = ({ product }: Props) => {
  return <ProductPage product={product} />;
};

export async function getServerSideProps(context: { params: { pid: string } }) {
  const product = await getSingleProduct(context.params.pid);
  return {
    props: {
      product: product,
    },
  };
}

export default SingleProductPage;
