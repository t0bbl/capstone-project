import dbConnect from "../../../../db/connect";
import Favorite from "../../../../db/models/Favorite";

export default async function handler(request, response) {
  await dbConnect();

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
  } else {
    response.status(405).json({ error: "Method not allowed" });
  }
}
