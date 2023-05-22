import mongoose from "mongoose";
const { Schema } = mongoose;

const picSchema = new Schema({
  picSRC: String,
  picSRCSlug: { type: String, required: false },
  isFavorite: Number,
});

const shirtSchema = new Schema({
  picID: { type: String, required: false },
  pic1: picSchema,
  pic2: picSchema,
  pic3: picSchema,
  pic4: picSchema,
  variation1: picSchema,
  variation2: picSchema,
  variation3: picSchema,
  variation4: picSchema,
  keywordOne: { type: String, required: true },
  keywordTwo: { type: String, required: true },
  keywordThree: { type: String, required: true },
});

const Shirt = mongoose.models.Shirt || mongoose.model("Shirt", shirtSchema);

export default Shirt;
