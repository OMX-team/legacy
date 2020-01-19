let express = require("express"),
  path = require("path"),
  mongoose = require("mongoose"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  passport = require("passport"),
  dataBase = require("./database/db");
require("dotenv").config();
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

////////////////
app.use(passport.initialize());
app.use(passport.session());

require("./routes/config/passport")(passport);
////////////////

// app.use(express.static(path.join(__dirname, 'dist/angular8-meanstack-angular-material')));
// app.use('/', express.static(path.join(__dirname, 'dist/angular8-meanstack-angular-material')));

// Create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log("Connected to port ", server.address().port);
});

// // Find 404 and hand over to error handler
// app.use((req, res, next) => {
//   next(createError(404));
// });

// error handler
app.use(function(err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
