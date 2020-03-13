const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});
const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "gavatar",
  allowedFormats: ["jpg", "jpeg", "png", "mp4", "mkv"],
  transformation: [{
    width: 500,
    height: 500,
    crop: "limit"
  }]
});
var parser = multer({
  storage: storage
});
module.exports = {
  parser
};