const express = require("express");
const app = express();
const userRoute = express.Router();
const userDB = require("../database/userDB");
const User = userDB.User;
// const Follow = require("../model/following.js");
const jwt = require("jsonwebtoken");
const passport = require("passport");
// const Item = require("../model/item.js");
// const config = require("../config/database");
const ObjectId = require("mongodb").ObjectID;
const bcrypt = require("bcryptjs");
// const Items = require("../model/item");
// const upload = require("../upload.js");

// user model   //note to self import the model
let user = require("../database/userDB");

//add user
userRoute.route("/signUp").post((req, res) => {
  //v //err handeling in case of missing required elements
  //notes : route should be changed
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) res.json({ err });
    else {
      req.body.password = hash;
      User.create(req.body, (err, created) => {
        if (err) return res.json({ err });
        created.password = undefined; // just a secuirity messerment dnt worry about it
        res.json({ created });
      });
    }
  });
});

userRoute.route("/logIn").post((req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  User.findOne({ username }, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({ success: false, msg: "User not found" });
    }
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        user.password = undefined;
        const token = jwt.sign(
          user.toJSON(),
          require("./config/config").secret,
          {
            expiresIn: 604800 // 1 week
          }
        );
        res.json({
          success: true,
          token: "jwt " + token,
          user
        });
      } else {
        return res.json({ success: false, msg: "Wrong password" });
      }
    });
  });
});

userRoute.route("/:id").get((req, res) => {
  //fetch user from data base
  User.findById(req.params.id, (err, user) => {
    if (err) res.json({ err });
    else res.json({ user });
  });
});

//updates the raiting
userRoute.route("/ratings").patch((req, res) => {
  //check it
  let rating = parseInt(req.body.rating);
  let id = req.body.id;
  userDB
    .findOne(id)
    .then(user => {
      if (user.rating === 0) {
        return (user.rating = rating);
      }
      return (user.rating + rating) / 2;
    })
    .then(ratings => userDB.updateRating(id, ratings))
    .then(updatedData => res.send(updatedData))
    .catch(err => console.log(err));
});

// router.post(
//   //still
//   "/:id/uploadImage",
//   passport.authenticate("jwt", { session: false }),
//   upload.single("photo"),
//   (req, res) => {
//     User.findByIdAndUpdate(
//       req.user._id,
//       { $set: { photo: req.file.filename } },
//       (err, updated) => {
//         res.json({ success: true });
//       }
//     );
//   }
// );

//add folowers
// router.get(
//   "/:id/follow",
//   passport.authenticate("jwt", { session: false }),
//   function(req, res) {
//     var data = {
//       follower: req.user._id,
//       followed: req.params.id
//     };
//     Follow.findOne(data, (err, found) => {
//       if (!found) {
//         Follow.create(data, function(err, user) {
//           if (err) res.json({ success: false, err });
//           else res.json({ success: true });
//         });
//       } else {
//         Follow.remove(data, function(err, user) {
//           if (err) res.json({ success: false, err });
//           else res.json({ success: true });
//         });
//       }
//     });
//   }
// );

module.exports = userRoute;
