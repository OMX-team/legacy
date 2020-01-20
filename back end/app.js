require("dotenv").config();
let express = require("express"),
path = require("path"),
mongoose = require("mongoose"),
 cors = require("cors"),
bodyParser = require("body-parser"),
passport = require("passport"),
dataBase = require("./database/db"),
 multer = require('multer');
require("./routes/config/passport")(passport);
const {uploadImage} = require('./googleCloudStorage/uploadImage')
///Uploading part

const multerMid = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
})
//////////////////////////////////
// Connecting mongoDB
mongoose.Promise = global.Promise;
mongoose
  .connect(dataBase.db, {
    useNewUrlParser: true
  })
  .then(
    () => {
      console.log("Database connected sucessfully ");
    },
    error => {
      console.log("Could not connected to database : " + error);
    }
  );

// Set up express js port
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const searchtRoute = require("./routes/searchroute");


const app = express();
app.disable('x-powered-by')
app.use(multerMid.single('file'))
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
// app.use(cors());
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/search", searchtRoute);
app.use("/upload", async (req, res, next) => {
  try {
    const myFile = req.file
    const imageUrl = await uploadImage(myFile)
    console.log(imageUrl)
    res
      .status(200)
      .json({
        message: "Upload was successful",
        data: imageUrl
      })
  } catch (error) {
    next(error)
  }
});
app.use((err, req, res, next) => {
  res.status(500).json({
    error: err,
    message: 'Internal server error!',
  })
  next()
})


////////////////
app.use(passport.initialize());
app.use(passport.session());



// Create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log(" 🚀 Connected to port ", server.address().port);
  console.log("Press Ctrl + C to stop the server ");

});


// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});