// here we are requiring the mongoose and saving into a constant called mongoose
const mongoose = require("mongoose");
const shortid = require('shortid');
// this schema is for the user
const Schema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    // required: true
  },
  firstname: {
    type: String,
    // required: true
  },
  lastname: {
    type: String,
    // required: true
  },
  gender: String,
  phone: {
    type: Number,
    unique: true
  },
  email: {
    type: String,
    // required: true
  },
  password: {
    type: String,
    // required: true
  },
  address: String,
  photo: String,
  bio: String,
  birthdate: {
    type: Date,
    // required: true
  },
  deactivated: {
    type: Boolean,
    default: true
  },
  verify_code: {
    type: String,
    default: shortid.generate
  }
});

const User = mongoose.model("user", Schema);

const findOne = id => {
  return User.findOne({
    _id: id
  });
};

const updateRating = (id, rating) => {
  return User.findOneAndUpdate({
    _id: id
  }, {
    rating
  }, {
    useFindAndModify: false
  });
};

// here we are exporting the model
module.exports.User = User;
module.exports.findOne = findOne;
module.exports.updateRating = updateRating;