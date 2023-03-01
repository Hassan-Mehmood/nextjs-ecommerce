import type { NextApiRequest, NextApiResponse } from "next";
import client from "prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { carousel_id, source, description, info } = req.body;
    const carouselItem = await client.carousel.create({
      data: {
        carousel_id,
        source,
        description,
        info,
      },
    });
    res.status(200).json(carouselItem);
  }

  // if (req.method === "GET") {
  //   const carousel = await client.carousel.findMany();
  //   res.status(200).json(carousel);
  // }

  // if (req.method === "DELETE") {
  //   const id = req.query.id?.toString();
  //   console.log(id)
  //   try {
  //     const carousel = await client.carousel.delete({
  //       where: {
  //         carousel_id: id,
  //       },
  //     });
  //     res.status(200).json({ message: `${carousel} deleted.` });
  //   } catch (err) {
  //     res.status(400).json(err);
  //   }
  // } else {
  //   res.status(400).json({ message: "bad request was made." });
  // }
}
