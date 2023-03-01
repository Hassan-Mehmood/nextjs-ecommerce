import type { NextApiRequest, NextApiResponse } from "next";
import client from "prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "DELETE") {
    const deleteCarouselID = req.query.deleteCarouselID?.toString();
    try {
      const deletedCarousel = await client.carousel.delete({
        where: {
          carousel_id: deleteCarouselID,
        },
      });
      res.status(200).json(deletedCarousel);
    } catch (err) {
      res.status(400).json(err);
    }
  } else {
    res.status(400).json({ message: "bad request was made." });
  }
}
