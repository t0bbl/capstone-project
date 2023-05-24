import dbConnect from "../../../../db/connect";
import Favorite from "../../../../db/models/Favorite";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const picID = req.query.picID;
      const matchedFav = await Favorite.findOne({
        picSRCCloudinarySlug: picID,
      });
      return res.status(200).json(matchedFav);
    } catch (error) {
      console.error("Error while fetching matchedPic:", error);
      res.status(500).json({ error: "Error while fetching matchedPic" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
