import dbConnect from "/db/connect";
import Favorite from "/db/models/Favorite";

export default async function handler(request, response) {
  await dbConnect();

  const { picSRCCloudinary } = request.body;

  if (request.method === "PUT") {
    try {
      const favorite = await Favorite.findOne({ picSRCCloudinary });
      favorite.favorites -= 1;

      await favorite.save();

      response.status(201).json({ status: "favorite updated", doc: favorite });
    } catch (error) {
      console.error(error);
      response.status(400).json({ error: "Error updating favorite" });
    }
  }
}
