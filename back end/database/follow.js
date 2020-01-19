// here we are requiring the mongoose and saving into a constant called mongoose
const mongoose = require("mongoose");

// this schema is for the following
const Schema = mongoose.Schema({
  follower: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  followed: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  }
});

// here we are exporting the model
module.exports = mongoose.model("following", Schema);
