import dbConnect from "../../../../../db/connect";
import Favorite from "../../../../../db/models/Favorite";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const favorites = await Favorite.find();
      res.status(200).json(favorites);
    } catch (error) {
      res.status(400).json(console.error(error));
    }
  }
}
