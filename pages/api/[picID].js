import dbConnect from "../../db/connect";
import Shirt from "../../db/models/Shirt";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const picID = request.query.picID;
      const matchedShirts = await Shirt.find({ picID: picID });
      return response.status(200).json(matchedShirts);
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
  if (request.method === "POST") {
    try {
      const shirtData = request.body;
      const shirt = new Shirt(shirtData);
      await shirt.save();
      response.status(201).json({ status: "shirt created" });
    } catch (error) {
      response.status(400).json(console.error(error));
    }
  }
}
