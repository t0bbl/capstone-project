import dbConnect from "../../db/connect";
import Shirt from "../../db/models/Shirt";

export default async function handler(req, res) {
  await dbConnect();
  if (request.method === "GET") {
    try {
      const shirts = await Shirt.find({ searchID: req.query.searchID });
      if (!shirts) {
        res.status(404).json({ success: false });
      }
      response.status(200).json(shirt);
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }

  if (request.method === "POST") {
    try {
      const shirtData = req.body;
      await Shirt.create(shirtData);
      res.status(201).json({ success: true });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }
}
