const express = require("express");
const router = express.Router();
const categoryHandler = require("../controllers/category.controller")
router.route("/")
.get(categoryHandler);

module.exports= router;