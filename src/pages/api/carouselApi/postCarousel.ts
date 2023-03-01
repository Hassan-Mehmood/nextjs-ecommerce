import type { NextApiRequest, NextApiResponse } from "next";
import client from "prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { carousel_id, source, description, info } = req.body;
    try {
      const carouselItem = await client.carousel.create({
        data: {
          carousel_id,
          source,
          description,
          info,
        },
      });
      res.status(200).json(carouselItem);
    } catch (err) {
      res.status(400).json(err);
    }
  } else {
    res.status(400).json({ message: "bad request was made." });
  }
}