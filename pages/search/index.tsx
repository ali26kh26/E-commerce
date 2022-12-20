import Head from "next/head";
import Search from "../../components/search-page/search";
import {
  getAllProducts,
  getFilteredProducts,
} from "../../helpers/products-util";
import product from "../../types/product";

const SearchPage = ({
  products,
  searchValue,
}: {
  products: Array<product>;
  searchValue: string;
}) => {
  return (
    <>
      <Head>
        <title>
          Search: {products.length} results found for "{searchValue}" -
          grocery-store
        </title>
        <meta name="description" content="search in variety of products" />
      </Head>
      <Search searchValue={searchValue} products={products} />;
    </>
  );
};

export default SearchPage;

export async function getServerSideProps(context: { query: { q: string } }) {
  const products = await getFilteredProducts(context.query.q);
  console.log(products);

  return {
    props: {
      products: products,
      searchValue: context.query.q,
    },
  };
}
