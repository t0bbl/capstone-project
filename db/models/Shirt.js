import mongoose from "mongoose";
const { Schema } = mongoose;

const picSchema = new Schema({
  picSRC: String,
  picSRCSlug: { type: String, required: false },
});

const variantSchema = new Schema({
  variant1: String,
  variant1slug: { type: String, required: false },
  variant2: String,
  variant2slug: { type: String, required: false },
  variant3: String,
  variant3slug: { type: String, required: false },
  variant4: String,
  variant4slug: { type: String, required: false },
});

const shirtSchema = new Schema({
  searchID: { type: String, required: false },
  pic1: picSchema,
  variant1: variantSchema,
  pic2: picSchema,
  variant2: variantSchema,
  pic3: picSchema,
  variant3: variantSchema,
  pic4: picSchema,
  variant4: variantSchema,
  keywordOne: { type: String, required: true },
  keywordTwo: { type: String, required: true },
  keywordThree: { type: String, required: true },
});

const Shirt = mongoose.models.Shirt || mongoose.model("Shirt", shirtSchema);

export default Shirt;
