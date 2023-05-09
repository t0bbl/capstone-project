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

async function fetchImages(resp, { searchID }) {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  try {
    const response = await openai.createImageVariation(
      fs.createReadStream("corgi_and_cat_paw.png"),
      4,
      "1024x1024"
    );

    const imageData = response.data.data;
    console.log(imageData);
    resp.status(200).json({ image: imageData });

    const formattedData = imageData.reduce((acc, item, index) => {
      const slugPattern = /\/([\w-]+)$/;
      const match = item.url.match(slugPattern);
      const slug = match ? match[1] : "";
      console.log(slug);
      acc[`pic${index + 1}`] = {
        variationSRC: item.url,
        variationSRCslug: slug,
      };
      return acc;
    }, {});
    try {
      await Shirt.findOneAndUpdate(
        { searchID: searchID },
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
    console.error("Error with OpenAI API:", error.response.data); // Log the complete error response
  }
}
