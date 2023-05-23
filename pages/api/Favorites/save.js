import dbConnect from "../../../db/connect";
import Favorite from "../../../db/models/Favorite";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const favoriteData = req.body;
      console.log("favoriteData:", favoriteData);
      const favorite = new Favorite(favoriteData);
      await favorite.save();
      res.status(201).json({ status: "fav created" });
    } catch (error) {
      res.status(400).json(console.error(error));
    }
  } else {
    // If it's not a POST method, return a 405 Method Not Allowed
    console.log(`Method ${req.method} not allowed`);
    res.status(405).json({ status: "Error", error: "Method not allowed" });
  }
}
