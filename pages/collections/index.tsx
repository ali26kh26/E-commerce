import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Collections from "../../components/collections-page/collections";
import { getAllProducts } from "../../helpers/products-util";
import product from "../../types/product";

const CollectionPage = ({ products }: { products: Array<product> }) => {
  const { query } = useRouter();

  return (
    <>
      <Head>
        <title>All products - grocery-store </title>
        <meta
          name="description"
          content="list of all products in grocery-store"
        />
      </Head>
      <Collections products={products} />;
    </>
  );
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
