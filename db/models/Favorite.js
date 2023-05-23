import mongoose from "mongoose";
const { Schema } = mongoose;

const favoriteSchema = new Schema({
  picID: String,
  picSRCCloudinary: String,
  picSRCCloudinarySlug: String,
  isFavorite: Boolean,
  favorites: Number,
});
const Favorite =
  mongoose.models.Favorite || mongoose.model("Favorite", favoriteSchema);

export default Favorite;
