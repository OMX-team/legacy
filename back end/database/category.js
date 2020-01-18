// here we are requiring the mongoose and saving into a constant called mongoose
const mongoose = require("mongoose");

// this schema is for the category
const Schema = mongoose.Schema({
  name: String
});

// here we are exporting the model
const Caegory = mongoose.model("category", Schema);

module.exports.Caegory = Caegory;
