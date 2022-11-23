import type { NextApiRequest, NextApiResponse } from "next";
import { getSingleProduct } from "../../../helpers/products-util";

type Data = {
  products?: any;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> {
  let product;
  try {
    // product = await getSingleProduct();
    // res.status(200).json({ product });
  } catch (error) {
    res.status(404).json({ message: "cannot get products from server" });
  }
}
