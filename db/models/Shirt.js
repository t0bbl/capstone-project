import mongoose from "mongoose";

const { Schema } = mongoose;

const shirtSchema = new Schema({
  searchID: { type: String, required: false },
  pic1: {
    picSRC: String,
    picSRCSlug: { type: String, required: false },
    picSRCSlugJPG: { type: String, required: false },
  },

  pic2: {
    picSRC: { type: String, required: false },
    picSRCSlug: { type: String, required: false },
    picSRCSlugJPG: { type: String, required: false },
  },

  pic3: {
    picSRC: { type: String, required: false },
    picSRCSlug: { type: String, required: false },
    picSRCSlugJPG: { type: String, required: false },
  },

  pic4: {
    picSRC: { type: String, required: false },
    picSRCSlug: { type: String, required: false },
    picSRCSlugJPG: { type: String, required: false },
  },

  keywordOne: { type: String, required: true },
  keywordTwo: { type: String, required: true },
  keywordThree: { type: String, required: true },
});

const Shirt = mongoose.models.Shirt || mongoose.model("Shirt", shirtSchema);

export default Shirt;
