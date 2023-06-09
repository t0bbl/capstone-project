import dbConnect from "../../../db/connect";
import Shirt from "../../../db/models/Shirt";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const picID = request.query.picID;
      const matchedShirt = await Shirt.findOne({
        $or: [
          { "pic1.picSRCSlug": picID },
          { "pic2.picSRCSlug": picID },
          { "pic3.picSRCSlug": picID },
          { "pic4.picSRCSlug": picID },
          { "variation1.picSRCSlug": picID },
          { "variation2.picSRCSlug": picID },
          { "variation3.picSRCSlug": picID },
          { "variation4.picSRCSlug": picID },
        ],
      });

      const matchedPic = [
        "pic1",
        "pic2",
        "pic3",
        "pic4",
        "variation1",
        "variation2",
        "variation3",
        "variation4",
      ].find((picKey) => {
        return matchedShirt[picKey].picSRCSlug === picID;
      });

      return response.status(200).json(matchedShirt[matchedPic]);
    } catch (error) {
      console.error("Error while fetching matchedPic:", error);
      response.status(500).json({ error: "Error while fetching matchedPic" });
    }
  } else {
    response.status(405).json({ error: "Method not allowed" });
  }
}
