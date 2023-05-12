import { Configuration, OpenAIApi } from "openai";
import Shirt from "@/db/models/Shirt";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { picSRC, searchID, picSRCSlug } = req.body.arg;
    const bufferToUseWithOpenAI = await handlePicture(picSRC);
    bufferToUseWithOpenAI.name = "temp.png";
    console.log(bufferToUseWithOpenAI);
    await fetchImages(res, {
      picSRC,
      picSRCSlug,
      searchID,
      bufferToUseWithOpenAI,
    });
  } else {
    res.status(405).send("Method not allowed");
  }
}

const handlePicture = async (url) => {
  const response = await fetch(url);
  const blob = await response.blob();
  const arrayBuffer = await blob.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  return buffer;
};

async function fetchImages(resp, { searchID, bufferToUseWithOpenAI }) {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);
  try {
    const response = await openai.createImageVariation(
      bufferToUseWithOpenAI,
      4,
      "1024x1024"
    );
    const imageData = response.data.data;
    await resp.status(200).json({ image: imageData });
    const formattedData = imageData.reduce((acc, item, index) => {
      const slugPattern = /img-([\w-]+)\.png/;
      const match = item.url.match(slugPattern);
      const slug = match ? match[1] : "";
      acc[`variation${index + 1}`] = { picSRC: item.url, picSRCSlug: slug };
      return acc;
    }, {});
    try {
      const updatedShirt = await Shirt.findOneAndUpdate(
        {
          searchID: searchID[0],
        },
        {
          $set: {
            ...formattedData,
          },
        },
        { upsert: true, new: true }
      );
    } catch (error) {
      console.error("Error updating data in MongoDB:", error);
    }
  } catch (error) {
    console.error("Error with OpenAI API:", error); // Log the complete error response
  }
}
