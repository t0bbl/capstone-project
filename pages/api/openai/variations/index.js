import { Configuration, OpenAIApi } from "openai";
import Shirt from "@/db/models/Shirt";
import { promisify } from "util";
const fs = require("fs");
const stream = require("stream");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { picSRC, searchID } = req.body.arg;

    await fetchImages(res, { picSRC, searchID });
  } else {
    res.status(405).send("Method not allowed");
  }
}

async function handlePicture() {
  const formData = new FormData();
  formData.append("file", picSRC);
  formData.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET);
  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDNAME}/upload`,
    {
      method: "POST",
      body: formData,
    }
  );
  const json = await response.json();
  const newPicSRC = json.url;
}

async function fetchImages(resp, { newPicSRC, searchID }) {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  await handlePicture();

  const openai = new OpenAIApi(configuration);
  try {
    const response = await openai.createImageVariation(
      fs.createReadStream(newPicSRC),
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
