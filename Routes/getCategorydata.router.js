const express = require("express");
const router = express.Router();
const  SingleCategory  = require("../controllers/singleCategory.controller");

router.route("/")
.get(SingleCategory);

module.exports = router;
