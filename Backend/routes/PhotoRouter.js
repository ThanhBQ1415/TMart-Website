const express = require("express");
const Photo = require("../db/photoModel");
const User = require("../db/userModel");
const router = express.Router();
const multer  = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const uploadCloud = require("../middleware/ulpoadCloud.middleware")
const auth = require("../middleware/auth.middleware")






// [get] /api/photo/photosOfUser/:id 


module.exports = router;
