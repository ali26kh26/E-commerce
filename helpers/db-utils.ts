import { MongoClient, ObjectId } from "mongodb";

export async function connectToDataBase() {
  let client: MongoClient;
  try {
    client = await MongoClient.connect(
      "mongodb+srv://ali26kh26:AZBY1928@grocery-store-db.4pkamqy.mongodb.net/products?retryWrites=true&w=majority"
    );
    return client;
  } catch (error) {
    console.warn(error);
    throw error;
  }
}

export async function getAllDocuments(
  client: MongoClient,
  collection: string,
  sort = {},
  projection = {}
) {
  const db = client.db();
  const documents = await db
    .collection(collection)
    .find()
    .project(projection)
    .sort(sort)
    .toArray();
  return documents;
}

export async function getSingleDocument(
  client: MongoClient,
  collection: string,
  find: object,
  projection: object
) {
  const db = client.db();
  const document = await db
    .collection(collection)
    .find(find)
    .project(projection)
    .toArray();

  return document[0];
}
