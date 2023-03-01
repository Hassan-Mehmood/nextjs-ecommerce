import type { NextApiRequest, NextApiResponse } from "next";
import client from "prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // const { product_id, source, title, price, size } = req.body;
    try {
      const product = await client.product.create({
        data: req.body,
      });
      res.status(200).json(product);
    } catch (err) {
      res.status(400).json(err);
    }
  } else {
    res.status(400).json({ message: "bad request was made." });
  }
}
