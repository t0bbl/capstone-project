import mongoose from "mongoose";

const { Schema } = mongoose;

const shirtSchema = new Schema({
  shirtID: { type: String, required: false },
  searchID: { type: String, required: false },
  keywordOne: { type: String, required: true },
  keywordTwo: { type: String, required: true },
  keywordThree: { type: String, required: true },
  imageSRC: { type: String, required: false },
  isParent: { type: Boolean, required: false },
  parentID: { type: String, required: false },
});

const Shirt = mongoose.models.Shirt || mongoose.model("Shirt", shirtSchema);

export default Shirt;
