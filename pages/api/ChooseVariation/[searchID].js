import dbConnect from "../../../db/connect";
import Shirt from "../../../db/models/Shirt";

export const config = {
  runtime: "edge",
};

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const searchID = req.query.searchID;
      const matchedShirt = await Shirt.findOne({
        $or: [
          { "pic1.picSRCSlug": searchID },
          { "pic2.picSRCSlug": searchID },
          { "pic3.picSRCSlug": searchID },
          { "pic4.picSRCSlug": searchID },
          { "variation1.picSRCSlug": searchID },
          { "variation2.picSRCSlug": searchID },
          { "variation3.picSRCSlug": searchID },
          { "variation4.picSRCSlug": searchID },
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
        return matchedShirt[picKey].picSRCSlug === searchID;
      });

      return res.status(200).json(matchedShirt[matchedPic]);
    } catch (error) {
      console.error("Error while fetching matchedPic:", error);
      res.status(500).json({ error: "Error while fetching matchedPic" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
