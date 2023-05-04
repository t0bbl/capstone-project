import dbConnect from "../../../db/connect";
import Shirt from "../../../db/models/Shirt";

export default async function handler(req, res) {
  try {
    await dbConnect();
  } catch (error) {
    console.error("Error connecting to the database:", error);
    return res.status(500).json({ error: "Error connecting to the database" });
  }

  if (req.method === "GET") {
    try {
      const searchID = req.query.searchID;
      const matchedShirt = await Shirt.findOne({
        $or: [
          { "pic1.picSRCSlug": searchID },
          { "pic2.picSRCSlug": searchID },
          { "pic3.picSRCSlug": searchID },
          { "pic4.picSRCSlug": searchID },
        ],
      });

      if (!matchedShirt) {
        console.error("No matched picture found");
        return res.status(404).json({ error: "No matched picture found" });
      }

      const matchedPic = ["pic1", "pic2", "pic3", "pic4"].find((picKey) => {
        return matchedShirt[picKey].picSRCSlug === searchID;
      });

      if (!matchedPic) {
        console.error("No matched picture found");
        return res.status(404).json({ error: "No matched picture found" });
      }

      return res.status(200).json(matchedShirt[matchedPic]);
    } catch (error) {
      console.error("Error while fetching matchedPic:", error);
      res.status(500).json({ error: "Error while fetching matchedPic" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
