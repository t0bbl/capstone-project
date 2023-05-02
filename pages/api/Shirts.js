import dbConnect from "../../db/connect";
import Shirt from "../../db/models/Shirt";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const shirtData = req.body;
      await Shirt.create(shirtData);
      console.log(shirtData);
      res.status(201).json({ status: "shirt created" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}
