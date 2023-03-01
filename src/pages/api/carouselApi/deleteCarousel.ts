import type { NextApiRequest, NextApiResponse } from "next";
import client from "prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method === "DELETE") {
    const id = req.body;
    console.log(id)
    console.log(req.body)
    try {
      const carousel = await client.carousel.delete({where: {
        carousel_id:id
      }})
      res.status(200).json({ message: `${carousel} deleted.` });
    } catch (err) {
      res.status(400).json(err);
    }
  } else {
    res.status(400).json({ message: "bad request was made." });
  }
}
