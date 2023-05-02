import dbConnect from "../../../db/connect";
import Shirt from "../../../db/models/Shirt";

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "GET") {
    try {
      const shirts = await Shirt.find({ searchID: req.query.searchID });
      if (!shirts) {
        res.status(404).json({ status: "not found" });
      }
      res.status(200).json(shirts);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  if (req.method === "POST") {
    try {
      const shirtData = req.body;
      await Shirt.create(shirtData);
      res.status(201).json({ status: "shirt created" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}
