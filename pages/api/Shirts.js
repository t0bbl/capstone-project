import dbConnect from "../../db/connect";
import Shirt from "../../db/models/Shirt";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const shirts = await Shirt.find();
      return res.status(200).json(shirts);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  if (req.method === "POST") {
    try {
      const shirtData = req.body;
      console.log(shirtData);
      const shirt = new Shirt(shirtData);
      await shirt.save();
      res.status(201).json({ status: "shirt created" });
    } catch (error) {
      res.status(400).json(console.error(error));
    }
  }
}
