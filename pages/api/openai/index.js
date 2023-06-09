import { Configuration, OpenAIApi } from "openai";
import Shirt from "@/db/models/Shirt";

export default async function handler(request, response) {
  if (request.method === "POST") {
    const { keywordOne, keywordTwo, keywordThree, picID } = request.body;
    await fetchImages(response, {
      keywordOne,
      keywordTwo,
      keywordThree,
      picID,
    });
  } else {
    response.status(405).send("Method not allowed");
  }
}

async function fetchImages(
  resp,
  { keywordOne, keywordTwo, keywordThree, picID }
) {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  try {
    const response = await openai.createImage({
      prompt:
        "illustrate a design that combines" +
        keywordOne +
        " and " +
        keywordTwo +
        " and " +
        keywordThree +
        ". In digital Art style.",
      n: 4,
      size: "1024x1024",
    });
    const imageData = response.data.data;
    resp.status(200).json({ image: imageData });
    const formattedData = imageData.reduce((acc, item, index) => {
      const slugPattern = /img-([\w-]+)\.png/;
      const match = item.url.match(slugPattern);
      const slug = match ? match[1] : "";
      acc[`pic${index + 1}`] = { picSRC: item.url, picSRCSlug: slug };
      return acc;
    }, {});

    try {
      const updatedShirt = await Shirt.findOneAndUpdate(
        { picID: picID },
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
