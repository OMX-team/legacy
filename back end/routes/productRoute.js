const express = require("express");
const app = express();
const productRoute = express.Router();
const productDB = require("../database/products");
const Product = productDB.Product;
const jwt = require("jsonwebtoken");
const passport = require("passport");
const ObjectId = require("mongodb").ObjectID;
const bcrypt = require("bcryptjs");
// const upload = require("../upload.js"); fix the location

productRoute.route("/").post(
  passport.authenticate("jwt", { session: false }),
  // upload.single("photo"),
  (req, res) => {
    // req.body.photo = req.file.filename;

    req.body.user = req.user._id; //try to understand this
    req.body.available = Boolean(req.body.available); //i should reconsider this for security

    Product.create(req.body, function(err, product) {
      if (err) res.json({ err });
      else res.json({ product });
    });
  }
);
productRoute.route("/").get((req, res) => {
  //test this
  Product.find({})
    .sort({ _id: -1 })
    .populate(["user"])
    .exec((err, items) => {
      if (err) res.json({ err });
      else res.json(items);
    });
});

module.exports = productRoute;
