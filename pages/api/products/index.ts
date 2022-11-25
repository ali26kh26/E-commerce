import type { NextApiRequest, NextApiResponse } from "next";
import { getAllProducts } from "../../../helpers/products-util";

type Data = {
  products?: any;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> {
  let products;
  try {
    products = await getAllProducts();
    res.status(200).json({ products });
  } catch (error) {
    res.status(404).json({ message: "cannot get products from server" });
  }
}
