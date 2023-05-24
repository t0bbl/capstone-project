import dbConnect from "/db/connect";
import Favorite from "/db/models/Favorite";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const favorites = await Favorite.find();
      response.status(200).json(favorites);
    } catch (error) {
      response.status(400).json(console.error(error));
    }
  }
}
