require("dotenv").config();
const express = require("express"),
  path = require("path"),
  mongoose = require("mongoose"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  passport = require("passport"),
  // Set up express js port
  userRoute = require("./routes/userRoute"),
  productRoute = require("./routes/productRoute"),
  searchtRoute = require("./routes/searchroute"),
  { parser } = require("./imageUploader");
require("./routes/config/passport")(passport);

//////////////////////////////////
// Connecting mongoDB
// mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.DB_LINK, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(
    () => {
      console.log("Database connected sucessfully ");
    },
    error => {
      console.log("Could not connected to database : ", error);
    }
  );

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(cors());
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/search", searchtRoute);
app.use("/api/images", parser.single("file"), (req, res) => {
  const image = {};
  image.url = req.file.url;
  image.id = req.file.public_id;
  res.json({
    image
  });
});

app.use(passport.initialize());
app.use(passport.session());
app.use("/", (req, res) => {
  res.send("This is OMX-backend");
});
//Server Starter
const server = app.listen(process.env.PORT, () => {
  console.log(`
      ################################################
           🛡️  Server listening on port: ${process.env.PORT} 🛡️ 
      ################################################
    `);
});

// error handler
app.use(function(err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
