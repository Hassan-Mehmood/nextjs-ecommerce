import type { NextApiRequest, NextApiResponse } from "next";
import client from "prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const getUniqueProductID = req.query.getUniqueProductID?.toString();
    try {
      const uniqueProduct = await client.product.findUnique({
        where: {
          product_id: getUniqueProductID,
        },
      });
      res.status(200).json(uniqueProduct);
    } catch (err) {
      res.status(400).json(err);
    }
  } else {
    res.status(400).json({ message: "bad request was made." });
  }
}
