import Head from "next/head";
import ProductPage from "../../components/product-page/product-page";
import { getSingleProduct } from "../../helpers/products-util";
import product from "../../types/product";

interface Props {
  product: product;
}

const SingleProductPage = ({ product }: Props) => {
  return (
    <>
      <Head>
        <title>{product.name} - grocery-store</title>
        <meta
          name="description"
          content={`more details about ${product.name}`}
        />
      </Head>
      <ProductPage product={product} />;
    </>
  );
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
