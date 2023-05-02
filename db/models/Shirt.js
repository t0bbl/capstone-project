import mongoose from "mongoose";

const { Schema } = mongoose;

const shirtSchema = new Schema({
  id: { type: String, required: true },
  tags: [string, string, string],
  imageSRC: { type: String, required: true },
  isParent: { type: Boolean, required: true },
  parentID: { type: String, required: false },
});

const Shirt = mongoose.models.Shirt || mongoose.model("Shirt", shirtSchema);

export default Shirt;
