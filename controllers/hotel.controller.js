const Hotel = require("../models/hotel.model");

const hotelHandler = async(req,res)=>{
    try{
        const hotels= await Hotel.find({})
res.json(hotels);
    }
    catch(err){
        console.log(err);
        res.json({message:"Not getting the data"})
    }

// res.send(req.body);
}

module.exports = hotelHandler;