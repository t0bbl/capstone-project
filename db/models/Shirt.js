import mongoose from "mongoose";
const { Schema } = mongoose;

const variantSchema = new Schema({
  variant1: String,
  variant1SRCSlug: { type: String, required: false },
  variant2: String,
  variant2SRCSlug: { type: String, required: false },
  variant3: String,
  variant3SRCSlug: { type: String, required: false },
  variant4: String,
  variant4SRCSlug: { type: String, required: false },
});
const picSchema = new Schema({
  picSRC: String,
  picSRCSlug: { type: String, required: false },
});

const shirtSchema = new Schema({
  searchID: { type: String, required: false },
  pic1: picSchema,
  pic2: picSchema,
  pic3: picSchema,
  pic4: picSchema,
  variation: variantSchema,
  keywordOne: { type: String, required: true },
  keywordTwo: { type: String, required: true },
  keywordThree: { type: String, required: true },
});

const Shirt = mongoose.models.Shirt || mongoose.model("Shirt", shirtSchema);

export default Shirt;
