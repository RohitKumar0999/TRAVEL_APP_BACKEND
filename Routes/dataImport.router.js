const express = require("express");
const { hotels } = require("../data/hotels");
const Hotel = require("../models/hotel.model");

// SO herw we include the router that helps in routing and we will export this,bcz it storing the route as an object in it 
const router = express.Router();


router.route("/")
.post(async(req,res)=>{
    try{
        const hotelsInDB= await Hotel.insertMany(hotels.data)
        res.json(hotelsInDB);
    }
    catch(err){
        console.log(err);
        res.json({meassge:"could not send the data to DB"});
    }
})

module.exports = router;