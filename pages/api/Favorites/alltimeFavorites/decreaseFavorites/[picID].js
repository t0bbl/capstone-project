import dbConnect from "../../../../../db/connect";
import Favorite from "../../../../../db/models/Favorite";

export default async function handler(req, res) {
  await dbConnect();

  const { picSRCCloudinary } = req.body;
  console.log("req.body:", req.body);
  console.log("picID:", picSRCCloudinary);

  if (req.method === "PUT") {
    try {
      const favorite = await Favorite.findOne({ picSRCCloudinary });
      console.log("favorite:", favorite);
      favorite.favorites -= 1;

      await favorite.save();

      res.status(201).json({ status: "favorite updated", doc: favorite });
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: "Error updating favorite" });
    }
  }
}
