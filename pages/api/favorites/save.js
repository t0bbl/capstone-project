import dbConnect from "../../../db/connect";
import Favorite from "../../../db/models/Favorite";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const favoriteData = req.body;
      const favorite = new Favorite(favoriteData);
      await favorite.save();
      res.status(201).json({ status: "fav created" });
    } catch (error) {
      res.status(400).json(console.error(error));
    }
  } else {
    res.status(405).json({ status: "Error", error: "Method not allowed" });
  }
}
