import {
  connectToDataBase,
  getAllDocuments,
  getSingleDocument,
} from "./db-utils";

export async function getAllProducts() {
  const client = await connectToDataBase();
  const products = await getAllDocuments(client, "products");
  return products;
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
