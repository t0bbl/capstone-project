import { Configuration, OpenAIApi } from "openai";
import Shirt from "@/db/models/Shirt";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { picSRC, searchID } = req.body.arg;
    console.log("Request body:", req.body); // this gives me the right request body with searchID

    await fetchImages(res, { picSRC, searchID });
  } else {
    res.status(405).send("Method not allowed");
  }
}

async function fetchImages(resp, { picSRC, searchID }) {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  try {
    const response = await openai.createImage({
      prompt: "give me 4 variations of this design: " + picSRC,
      n: 4,
      size: "1024x1024",
    });
    const imageData = response.data.data;
    resp.status(200).json({ image: imageData });
    const formattedData = {
      variation: imageData.reduce((acc, item, index) => {
        const slugPattern = /img-([\w-]+)\.png/;
        const match = item.url.match(slugPattern);
        const slug = match ? match[1] : "";
        return {
          ...acc,
          [`variant${index + 1}`]: item.url,
          [`variant${index + 1}SRCSlug`]: slug,
        };
      }, {}),
    };
    try {
      console.log(`searchID: ${searchID[0]}`);
      const updatedShirt = await Shirt.findOneAndUpdate(
        {
          searchID: searchID[0],
        },
        {
          $set: {
            variation: formattedData.variation,
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
