import dbConnect from "../../db/connect";
import Shirt from "../../db/models/Shirt";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const searchID = req.query.searchID;
      const matchedShirts = await Shirt.find({ searchID: searchID });
      return res.status(200).json(matchedShirts);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  if (req.method === "POST") {
    try {
      const shirtData = req.body;
      const shirt = new Shirt(shirtData);
      await shirt.save();
      res.status(201).json({ status: "shirt created" });
    } catch (error) {
      res.status(400).json(console.error(error));
    }
  }
  if (req.method === "PUT") {
    try {
      await Shirt.find(
        { searchID: searchID },
        {
          $set: req.body,
        }
      );
    } catch (error) {
      res.status(400).json(console.error(error));
    }
    response.status(200).json({ status: `Shirt ${searchID} updated!` });
  }
}
