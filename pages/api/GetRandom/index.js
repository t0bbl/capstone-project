import dbConnect from "../../../db/connect";
import Shirt from "../../../db/models/Shirt";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const randomShirts = await Shirt.aggregate([
        {
          $project: {
            picSrcs: [
              "$pic1.picSRC",
              "$pic2.picSRC",
              "$pic3.picSRC",
              "$pic4.picSRC",
              "$variation1.picSRC",
              "$variation2.picSRC",
              "$variation3.picSRC",
              "$variation4.picSRC",
            ],
          },
        },
        { $unwind: "$picSrcs" },
        { $sample: { size: 4 } },
      ]);
      return res.status(200).json(randomShirts);
    } catch (error) {
      console.error(" Error while fetching randomShirts:", error.message);
      res.status(500).json({ error: "11Error while fetching randomShirts" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
