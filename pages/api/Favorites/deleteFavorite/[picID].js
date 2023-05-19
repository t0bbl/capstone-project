import dbConnect from "../../../../db/connect";
import Favorite from "../../../../db/models/Favorite";

export default async function handler(req, res) {
  await dbConnect();
  const picID = req.query.picID;

  if (req.method === "DELETE") {
    try {
      await Favorite.findOneAndDelete(picID);
      res.status(200).json({ status: `Joke ${picID} successfully deleted.` });
    } catch (error) {
      res.status(400).json(console.error(error));
    }
  }
}
