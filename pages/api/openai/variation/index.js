// import { Configuration, OpenAIApi } from "openai";
// import Shirt from "@/db/models/Shirt";

// function getSlug(url) {
//   const slugPattern = /\/([\w-]+)$/;
//   const match = url.match(slugPattern);
//   return match ? match[1] : "";
// }

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { picSRC, searchID } = req.body;
//     await fetchImages(res, { picSRC, searchID });
//   } else {
//     res.status(405).send("Method not allowed");
//   }
// }

// async function fetchImages(res, { picSRC, searchID }) {
//   const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
//   });
//   const openai = new OpenAIApi(configuration);
//   const response = await openai.createImage({
//     prompt: "give me a variation of " + picSRC,
//     n: 4,
//     size: "1024x1024",
//   });
//   const imageData = response.data;
//   res.status(200).json({ image: imageData.data });

//   formattedData = {
//     variant1: imageData.data[0].url,
//     variant1slug: getSlug(imageData.data[0].url),
//     variant2: imageData.data[1].url,
//     variant2slug: getSlug(imageData.data[1].url),
//     variant3: imageData.data[2].url,
//     variant3slug: getSlug(imageData.data[2].url),
//     variant4: imageData.data[3].url,
//     variant4slug: getSlug(imageData.data[3].url),
//   };

//   try {
//     await Shirt.findOneAndUpdate(
//       { searchID: searchID, "pic1.picSRC": picSRC },
//       {
//         $set: {
//           "pic1.variant1": formattedData.variant1,
//           "pic1.variant1slug": formattedData.variant1slug,
//           "pic1.variant2": formattedData.variant2,
//           "pic1.variant2slug": formattedData.variant2slug,
//           "pic1.variant3": formattedData.variant3,
//           "pic1.variant3slug": formattedData.variant3slug,
//           "pic1.variant4": formattedData.variant4,
//           "pic1.variant4slug": formattedData.variant4slug,
//         },
//       },
//       { upsert: true, new: true }
//     );
//   } catch (error) {
//     console.error("Error updating data in MongoDB:", error);
//   }
// }
