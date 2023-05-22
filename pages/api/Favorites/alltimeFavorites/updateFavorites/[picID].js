import dbConnect from "../../../../../db/connect";
import Favorite from "../../../../../db/models/Favorite";

export default async function handler(req, res) {
  await dbConnect();

  const { picID } = req.query;

  if (req.method === "PUT") {
    try {
      const updatedDocument = await Favorite.findOneAndUpdate(
        { picID: picID },
        {
          $set: req.body,
        },
        { new: true }
      );

      res
        .status(201)
        .json({ status: "favorite updated", doc: updatedDocument });
    } catch (error) {
      res.status(400).json(console.error(error));
    }
  }
}
