import product from "../../types/product";
import { Product } from "../ProductCMP";
import SearchBox from "./search-box/search-box";
import classes from "./search.module.scss";
const Search = ({
  products,
  searchValue,
}: {
  products: Array<product>;
  searchValue: string;
}) => {
  return (
    <div className={classes.container}>
      {products.length > 0 ? (
        <h1>Your search for "{searchValue}" revealed the following: </h1>
      ) : (
        <h1>Your search for "{searchValue}" did not yield any result: </h1>
      )}
      <div className={classes.search_box}>
        <SearchBox />
      </div>
      {products.length > 0 && (
        <div style={{ marginBottom: "4rem" }}>
          {products.map((product, index) => (
            <Product product={product} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
