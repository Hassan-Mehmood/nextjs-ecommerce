import type { NextApiRequest, NextApiResponse } from "next";
import client from "prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const id = req.query.details?.toString();
    const data = await client.carousel.findUnique({
      where: {
        carousel_id: id,
      },
    });
    res.status(200).json(data);
  }

}
