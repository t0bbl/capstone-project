import dbConnect from "../../../../db/connect";
import Favorite from "../../../../db/models/Favorite";

export default async function handler(request, response) {
  await dbConnect();
  const { picSRCCloudinary } = request.body;
  const operation = request.query.operation; // increase or decrease

  if (request.method === "GET") {
    try {
      const picID = request.query.picID;
      const matchedFav = await Favorite.findOne({
        picSRCCloudinarySlug: picID,
      });
      return response.status(200).json(matchedFav);
    } catch (error) {
      console.error("Error while fetching matchedPic:", error);
      response.status(500).json({ error: "Error while fetching matchedPic" });
    }
  }
  if (request.method === "PUT") {
    try {
      const favorite = await Favorite.findOne({ picSRCCloudinary });

      if (operation === "increase") {
        favorite.favorites += 1;
      } else if (operation === "decrease") {
        favorite.favorites -= 1;
      }

      await favorite.save();

      response.status(201).json({ status: "favorite updated", doc: favorite });
    } catch (error) {
      console.error(error);
      response.status(400).json({ error: "Error updating favorite" });
    }
  } else {
    response.status(405).json({ error: "Method not allowed" });
  }
}
