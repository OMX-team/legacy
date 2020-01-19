const multer = require("multer"),
  storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) =>
      cb(null, new Date().getTime() + file.originalname)
  });

module.exports = multer({ storage, limits: 1024 * 1024 * 2 });
