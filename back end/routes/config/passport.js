const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJWT = require("passport-jwt").ExtractJwt;

const userDB = require("../../database/userDB");
const User = userDB.User;
const config = require("./config");

module.exports = function(passport) {
  let opts = {};
  opts.jwtFromRequest = ExtractJWT.fromAuthHeaderWithScheme("jwt");
  opts.secretOrKey = config.secret;

  passport.use(
    new JwtStrategy(opts, function(jwt_payload, done) {
      User.findById(jwt_payload._id, function(err, user) {
        if (err) {
          return done(err, false);
        }
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    })
  );
};
