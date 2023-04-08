import { useAppSelector } from "../hooks/hooks";
import { price_state } from "../types/price_state";
import product from "../types/product";

export function calcDiscountPrice(price: number, discount: number) {
  return (price - price * (discount / 100)).toFixed(2);
}

export function getFilteredProducts(products: Array<product>) {
  const { availibilty_filter, material_filter, size_filter, sort, price } =
    useAppSelector((state) => state.fiter);
  let filteredProducts = products;

  //filter products by size
  filteredProducts = filteredProducts.filter((product) =>
    isAllSizesAvailable(size_filter, product.size)
  );

  //filter products by availability
  filteredProducts = filteredProducts.filter((product) =>
    isAvailable(availibilty_filter, product.in_stock)
  );

  //filter by price
  filteredProducts = filterByPrice(filteredProducts, price);

  //sort products
  filteredProducts = getSortedProducts(filteredProducts, sort);

  return filteredProducts;
}

function isAllSizesAvailable(
  sizes: Array<string>,
  productSizes: Array<string>
) {
  return sizes.every((size) => {
    return productSizes.includes(size);
  });
}

function isAvailable(availability: Array<string>, productAvailabilty: boolean) {
  if (availability.length === 0 || availability.length === 2) {
    return true;
  } else {
    if (availability[0] === "In stock") {
      return productAvailabilty === true ? true : false;
    } else {
      return productAvailabilty === false ? true : false;
    }
  }
}

function getSortedProducts(products: Array<product>, value: string) {
  let SortedProducts = products;
  switch (value) {
    case "title-ascending":
      SortedProducts = products.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "title-descending":
      SortedProducts = products.sort(
        (a, b) => -1 * a.name.localeCompare(b.name)
      );
      break;
    case "price-ascending":
      SortedProducts = products.sort(
        (a, b) =>
          parseFloat(calcDiscountPrice(a.price, a.discount || 0)) -
          parseFloat(calcDiscountPrice(b.price, b.discount || 0))
      );
      break;
    case "price-descending":
      SortedProducts = products.sort(
        (a, b) =>
          parseFloat(calcDiscountPrice(b.price, b.discount || 0)) -
          parseFloat(calcDiscountPrice(a.price, a.discount || 0))
      );
      break;
    default:
      break;
  }

  return SortedProducts;
}

function filterByPrice(products: Array<product>, price: price_state) {
  const filteredProducts = products.filter((product) => {
    const productFinalPrice = parseFloat(
      calcDiscountPrice(product.price, product.discount || 0)
    );
    return productFinalPrice >= price.min && productFinalPrice <= price.max;
  });
  return filteredProducts;
}
