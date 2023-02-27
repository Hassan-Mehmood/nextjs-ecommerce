import type { NextApiRequest, NextApiResponse } from "next";
import client from "prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { product_id, source, title, price, size } = req.body;
    const product = await client.product.create({
      data: {
        product_id,
        source,
        title,
        price,
        size,
      },
    });
    res.status(200).json(product);
  }
  if(req.method === 'GET'){
    const allProducts = await client.product.findMany();
    res.status(200).json(allProducts);
  }
}
