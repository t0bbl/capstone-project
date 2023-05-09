import { Configuration, OpenAIApi } from "openai";
import Shirt from "@/db/models/Shirt";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { searchID } = req.body;
    await fetchImages(res, { searchID });
  } else {
    res.status(405).send("Method not allowed");
  }
}

async function fetchImages(resp, { arg, picSRCSlug, picIndex }) {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  try {
    const response = await openai.createImage({
      prompt: "give me 4 variations of this design: " + arg,
      n: 4,
      size: "1024x1024",
    });
    const imageData = response.data.data;
    resp.status(200).json({ image: imageData });
    const formattedData = imageData.reduce(
      (acc, item, index) => {
        const slugPattern = /img-([\w-]+)\.png/;
        const match = item.url.match(slugPattern);
        const slug = match ? match[1] : "";
        acc[`pic${picIndex}`][`variation${index + 1}`] = {
          variationSRC: item.url,
          variationSRCslug: slug,
        };
        return acc;
      },
      { [`pic${picIndex}`]: {} }
    );
    try {
      const updatedShirt = await Shirt.findOneAndUpdate(
        {
          $or: [
            { "pic1.picSRCSlug": picSRCSlug },
            { "pic2.picSRCSlug": picSRCSlug },
            { "pic3.picSRCSlug": picSRCSlug },
            { "pic4.picSRCSlug": picSRCSlug },
          ],
        },
        {
          $set: {
            ...formattedData,
          },
        },
        { upsert: true, new: true }
      );
      console.log("Updated shirt:", updatedShirt);
    } catch (error) {
      console.error("Error updating data in MongoDB:", error);
    }
  } catch (error) {
    console.error("Error with OpenAI API:", error); // Log the complete error response
  }
}
