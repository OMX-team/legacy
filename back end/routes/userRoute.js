const express = require("express");
const app = express();
const userRoute = express.Router();
const userDB = require("../database/userDB");
const User = userDB.User;
const productDB = require("../database/products");
const Product = productDB.Product;
const Follow = require("../database/follow");
const jwt = require("jsonwebtoken");
const passport = require("passport");
// const Item = require("../model/item.js");
// const config = require("../config/database");
const ObjectId = require("mongodb").ObjectID;
const bcrypt = require("bcryptjs");
// const Items = require("../model/item");
// const upload = require("./uploadroute");
const sendEmail = require("../emailValidation/emailSender").sendEmail;
console.log("send function", sendEmail);
const generateId = require("shortid");

// user model   //note to self import the model
let user = require("../database/userDB");

//add user
userRoute.route("/signUp").post((req, res) => {
  //notes : route should be changed
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err)
      res.json({
        err
      });
    else {
      req.body.password = hash;
      User.create(req.body, (err, created) => {
        if (err)
          return res.json({
            err
          });
        created.password = undefined; // just a secuirity messerment dnt worry about it
        sendEmail(created.email, req.body.username, created.verify_code)
          .then(({
            result
          }) => {
            created.verify_code = undefined;
            res.json({
              success: true,
              created
            });
          })
          .catch(err => {
            return res.json({
              success: false,
              err
            });
          });
      });
    }
  });
});
// Verify route + update deactivated
userRoute.route("/verify").post((req, res, next) => {
  //changed the route to post for better security
  User.findOne({
      username: req.body.username
    },
    (err, user) => {
      if (err)
        res.json({
          success: false,
          err
        });
      //check if the url correct
      console.log(req.body);
      if (user.verify_code === req.body.code) {
        User.findByIdAndUpdate(
          user._id, {
            deactivated: false,
            verify_code: ""
          },
          (err, result) => {
            if (err) {
              res.json({
                err
              });
            } else {
              const token = jwt.sign(
                user.toJSON(),
                require("./config/config").secret, {
                  expiresIn: 500
                }
              );
              // log the user in
              res.json({
                success: true,
                token: "jwt " + token,
                user
              });
            }
          }
        );
      } else {
        res.json({
          message: "Error wrong verification"
        });
      }
    }
  );
});
userRoute.route("/resend-msg").post((req, res, next) => {
  const newVerifyCode = generateId()
  User.findOneAndUpdate({
    username: req.body.username
  }, {
    verify_code: newVerifyCode
  }, (err, user) => {
    
    if (err) return res.json({
      success: false,
      err
    })
    if (user.deactivated)
    sendEmail(user.email, user.username, newVerifyCode).then(({
      result
    }) => {
      res.json({
          success: true,
          result
        })
        .catch(err => {
          if (err) {
            return res.json({
              success: false,
              err
            });
          }
        });
    });
  });
})
////////////////
userRoute.route("/logIn").post((req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  User.findOne({
      username
    },
    (err, user) => {
      if (err) throw err;
      if (!user) {
        return res.json({
          success: false,
          msg: "User not found"
        });
      }
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) throw err;
        if (isMatch) {
          user.password = undefined;
          const token = jwt.sign(
            user.toJSON(),
            require("./config/config").secret, {
              expiresIn: 604800 // 1 week
            }
          );
          res.json({
            success: true,
            token: "jwt " + token,
            user
          });
        } else {
          return res.json({
            success: false,
            msg: "Wrong password"
          });
        }
      });
    }
  );
});

userRoute.route("/me").get(
  passport.authenticate("jwt", {
    session: false
  }),
  (req, res) => {
    req.user.password = undefined;
    res.send(req.user);
  }
);

userRoute.route("/:id").get((req, res) => {
  //fetch user from data base
  User.findById(req.params.id, (err, user) => {
    if (err)
      res.json({
        err
      });
    else
      res.json({
        user
      });
  });
});

userRoute.route("/:id/uploadImage").post(
  //passport.authenticate("jwt", {
  //session: false
  //}),
  // upload.single("photo"),
  (req, res) => {
    console.log("testtttt");
    // console.log(req.body);
    // console.log({ reqhead: req.headers });
    console.log({
      req: req[file]
    });
    User.findByIdAndUpdate(
      req.user._id, {
        $set: {
          photo: req.file.filename
        }
      },
      (err, updated) => {
        res.json({
          success: true
        });
      }
    );
  }
);
// passport.authenticate("jwt", { session: false }),
userRoute.route("/:id/products").get(
  passport.authenticate("jwt", {
    session: false
  }),
  (req, res) => {
    if (req.user._id == req.params.id) {
      Product.find({
          user: req.user._id
        })
        .sort({
          _id: -1
        })
        .exec((err, products) => {
          if (err)
            res.json({
              err
            });
          else
            res.json({
              products,
              user: req.user
            });
        });
    } else {
      Follow.exists({
          followed: req.params.id,
          follower: req.user._id
        },
        (err, exist) => {
          user.followed = exist;
          user.password = undefined;
          Product.find({
              user: req.params.id
            })
            .sort({
              _id: -1
            })
            .exec((err, products) => {
              if (err)
                res.json({
                  err
                });
              else
                res.json({
                  products,
                  user
                });
            });
        }
      );
    }
  }
);
//add followers and removes follower
userRoute.route("/:id/follow").get(
  passport.authenticate("jwt", {
    session: false
  }),
  (req, res) => {
    var data = {
      follower: req.user._id,
      followed: req.params.id
    };
    Follow.findOne(data, (err, found) => {
      if (!found) {
        Follow.create(data, function (err, user) {
          if (err)
            res.json({
              success: false,
              err
            });
          else
            res.json({
              success: "followed"
            });
        });
      } else {
        Follow.remove(data, function (err, user) {
          if (err)
            res.json({
              success: false,
              err
            });
          else
            res.json({
              success: "un folowed"
            });
        });
      }
    });
  }
);

userRoute.route("/:id/followers").get(
  passport.authenticate("jwt", {
    session: false
  }),
  (req, res) => {
    Follow.find({
        followed: ObjectId(req.params.id)
      })
      .populate("follower")
      .exec(function (err, data) {
        if (err)
          res.json({
            success: false,
            err
          });
        else res.json(data);
      });
  }
);

userRoute
  .route("/:id/followings") //here
  .get(
    passport.authenticate("jwt", {
      session: false
    }),
    (req, res) => {
      Follow.find({
          follower: ObjectId(req.params.id)
        })
        .populate("followed")
        .exec(function (err, data) {
          if (err)
            res.json({
              success: false,
              err
            });
          else res.json(data);
        });
    }
  );

//updates the raiting
userRoute.route("/ratings").patch((req, res) => {
  //check it
  let rating = parseInt(req.body.rating);
  let id = req.body.id;
  userDB
    .findOne(id)
    .then(user => {
      console.log(user.rating);
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