// here we are requiring the mongoose and saving into a constant called mongoose
const mongoose = require("mongoose");

// this schema is for the item
const Schema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
    maxlength: 250
  },
  photo: {
    type: String
    // required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  price: {
    type: Number,
    required: true
  },
  available: {
    type: Boolean,
    default: true
  },
  quantity: {
    type: Number,
    default: 1
  },
  deactivated: {
    type: Boolean,
    default: false
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category"
  }
});

// here we are exporting the model
const Product = mongoose.model("product", Schema);
module.exports.Product = Product;
