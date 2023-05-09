import { Configuration, OpenAIApi } from "openai";
import Shirt from "@/db/models/Shirt";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { keywordOne, keywordTwo, keywordThree, searchID } = req.body;
    await fetchImages(res, { keywordOne, keywordTwo, keywordThree, searchID });
  } else {
    res.status(405).send("Method not allowed");
  }
}

async function fetchImages(
  res,
  { keywordOne, keywordTwo, keywordThree, searchID }
) {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.createImage({
    prompt:
      "give me a design with a " +
      keywordOne +
      " and a " +
      keywordTwo +
      " and a " +
      keywordThree,
    n: 4,
    size: "1024x1024",
  });
  const imageData = response.data;
  res.status(200).json({ image: imageData.data });

  const formattedData = imageData.data.reduce((acc, item, index) => {
    const slugPattern = /\/([\w-]+)$/;
    const match = item.url.match(slugPattern);
    const slug = match ? match[1] : "";
    console.log(slug);
    acc[`pic${index + 1}`] = { picSRC: item.url, picSRCslug: slug };
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
}
