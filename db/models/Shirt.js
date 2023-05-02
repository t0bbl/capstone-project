import mongoose from "mongoose";

const { Schema } = mongoose;

const shirtSchema = new Schema({
  searchID: { type: String, required: false },
  tags: [{ type: String }],
  imageSRC: { type: String, required: false },
  isParent: { type: Boolean, required: false },
  parentID: { type: String, required: false },
});

const Shirt = mongoose.models.Shirt || mongoose.model("Shirt", shirtSchema);

export default Shirt;
