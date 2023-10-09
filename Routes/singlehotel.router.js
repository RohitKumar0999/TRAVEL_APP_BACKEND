const express = require("express");
const singleHotelController = require("../controllers/singleHotel.controller");
const router = express.Router();


router.route("/:id")
.get(singleHotelController)

module.exports = router;