const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  restaurant: {
    type: String,
    trim: true,
    required: "Enter the name of your restaurant",
  },
  contact: {
    type: String,
    trim: true,
  },
  sharPrice: {
    type: Number,
    required: "Enter the price you would like to share your space for",
  },
  imageURL: {
    type: String,
    trim: true,
    required: "Enter a restaurant image URL",
  },
  cuisine: {
    type: String,
    trim: true,
    required: "Enter cusince offered at the restaurant",
  },
  sf: {
    type: Number,
    required: "Enter the size of the sharebale space in sf",
  },
  address: {
    type: String,
    required: "Enter the restaurant location address",
  },
  restaurantComment: {
    type: String,
    required: "Enter the restaurant location address",
  },
  availibility: {
    type: Boolean,
    default: false,
  },
});

const Listings = mongoose.model("Listings", restaurantSchema);

module.exports = Listings;

