import {
  connectToDataBase,
  getAllDocuments,
  getSingleDocument,
} from "./db-utils";

export async function getAllProducts() {
  const client = await connectToDataBase();
  const products = await getAllDocuments(client, "products", {}, { _id: 0 });
  return products;
}
export async function getFilteredProducts(find: string) {
  const products = await getAllProducts();
  const filteredProducts = products.filter((product) =>
    product.name.includes(find)
  );
  return filteredProducts;
}
export async function getSingleProduct(slug: string) {
  const client = await connectToDataBase();
  const product = await getSingleDocument(
    client,
    "products",
    { slug: slug },
    { _id: 0 }
  );
  return product;
}
