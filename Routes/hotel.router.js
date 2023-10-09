const express = require("express");

const hotelHandler = require("../controllers/hotel.controller");
// SO herw we include the router that helps in routing and we will export this,bcz it storing the route as an object in it 
const router = express.Router();

router.route("/")
.get(hotelHandler)



module.exports = router;