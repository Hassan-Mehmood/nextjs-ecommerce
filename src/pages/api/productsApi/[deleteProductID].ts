import type { NextApiRequest, NextApiResponse } from "next";
import client from "prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "DELETE") {
    const deleteProductID = req.query.deleteProductID?.toString();
    try {
      const deletedProduct = await client.product.delete({
        where: {
          product_id: deleteProductID,
        },
      });
      res.status(200).json(deletedProduct);
    } catch (err) {
      res.status(400).json(err);
    }
  } else {
    res.status(400).json({ message: "bad request was made." });
  }
}
