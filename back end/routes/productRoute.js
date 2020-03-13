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

productRoute.route("/add").post(
  passport.authenticate("jwt", {
    session: false
  }),

  // upload.single("photo"),
  (req, res) => {
    console.log(req.headers)
    // req.body.photo = req.file.filename;
    req.body.user = req.user._id; //try to understand this
    req.body.available = JSON.parse(req.body.available); // should reconsider this for security

    Product.create(req.body, function(err, product) {
      if (err)
        res.json({
          err
        });
      else
        res.json({
          product
        });
    });
  }
);

productRoute.route("/:id").get((req, res) => {
  // get one product by id
  Product.findById(req.params.id)
    .populate("user")
    .exec((err, product) => {
      if (err)
        res.json({
          err
        });
      else res.json(product);
    });
});

productRoute.route("/").get((req, res) => {
  //test this
  Product.find({})
    .sort({
      _id: -1
    })
    .populate(["user"])
    .exec((err, items) => {
      if (err)
        res.json({
          err
        });
      else res.json(items);
    });
});

productRoute.route("/:id").patch((req, res) => {
  // upadate product by id
  Product.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body
    },
    (err, product) => {
      if (err) return res.send(err);
      else return res.send(product); // return the original object for some reason ??
    }
  );
});

productRoute.route("/:id/toggle").patch((req, res) => {
  Product.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body.deactivated
    },
    (err, product) => {
      if (err) return res.send(err);
      else return res.send(product);
    }
  );
});

module.exports = productRoute;
