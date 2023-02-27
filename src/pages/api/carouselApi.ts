import type { NextApiRequest, NextApiResponse } from "next";
import client from "prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { Carousel_id, source, description, info } = req.body;
    const carouselItem = await client.carousel.create({
      data: {
        Carousel_id,
        source,
        description,
        info,
      },
    });
    res.status(200).json(carouselItem);
  }

  if (req.method === "GET") {
    const carousel = await client.carousel.findMany();
    res.status(200).json(carousel);
  }
}
