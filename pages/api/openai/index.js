import { Configuration, OpenAIApi } from "openai";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { keywordOne, keywordTwo, keywordThree } = req.body;
    await fetchImages(res, { keywordOne, keywordTwo, keywordThree });
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
    n: 2,
    size: "1024x1024",
  });
  const imageData = response.data;
  res.status(200).json({ image: imageData.data });

    const formattedData = imageData.data.map((item, index) => {
      return { [`pic${index + 1}`]: { picSRC: item.url } };
    });
  } catch (error) {
    console.error("Error while fetching images:", error);
    res
      .status(500)
      .json({ message: "An error occurred while processing your request." });
  }
  const formattedData = imageData.data.map((item, index) => {
    return { [`pic${index + 1}`]: { picSRC: item.url } };
  });
}
