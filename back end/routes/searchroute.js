const express = require("express");
const app = express();
const searchRoute = express.Router();
const userDB = require("../database/userDB");
const User = userDB.User;
// const Follow = require("../model/following.js");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const productDB = require("../database/products");
const Product = productDB.Product;

const ObjectId = require("mongodb").ObjectID;
const bcrypt = require("bcryptjs");
// const Items = require("../model/item");
// const upload = require("../upload.js");

// user model   //note to self import the model
// let user = require("../database/userDB");

searchRoute.route("/").get((req, res) => {
  //exemple http request http://127.0.0.1:4000/api/search?keyword={ query }&usedfor={ People or Products }
  var regex = {
    $regex: req.query.keyword,
    $options: "i"
  };
  if (req.query.usedfor == "People") {
    User.find(
      {
        $or: [
          {
            username: regex
          },
          {
            firstname: regex
          },
          {
            lastname: regex
          }
        ]
      },
      (err, users) => {
        if (err)
          res.json({
            success: false,
            err
          });
        else
          {
            res.json({
            users
          });}
      }
    );
  } else if (req.query.usedfor == "Products") {
    Product.find(
      {
        name: regex
      },
      (err, products) => {
        if (err)
          res.json({
            success: false,
            err
          });
        else
          res.json({
            products
          });
      }
    );
  } else
    res.json({
      success: false
    });
});

module.exports = searchRoute;
