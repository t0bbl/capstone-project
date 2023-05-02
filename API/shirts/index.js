import dbConnect from "../../db/connect";
import Shirt from "../../db/models/Shirt";

export default async function handler(req, res) {
  await dbConnect();
  if (request.method === "GET") {
    const shirts = await Shirt.find({ searchID: req.query.searchID });
    if (!shirts) {
      res.status(404).json({ success: false });
    }
    response.status(200).json(shirt);
  }
}
