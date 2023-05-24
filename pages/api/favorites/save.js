import dbConnect from "../../../db/connect";
import Favorite from "../../../db/models/Favorite";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "POST") {
    try {
      const favoriteData = request.body;
      const favorite = new Favorite(favoriteData);
      await favorite.save();
      response.status(201).json({ status: "fav created" });
    } catch (error) {
      response.status(400).json(console.error(error));
    }
  } else {
    response.status(405).json({ status: "Error", error: "Method not allowed" });
  }
}
