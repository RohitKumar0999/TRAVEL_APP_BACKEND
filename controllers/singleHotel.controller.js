const Hotel = require("../models/hotel.model");


const singleHotelController =async(req,res)=>{
    const {id} = req.params;
    try{
        const hotel =await Hotel.findById(id)
        res.status(200).json(hotel);

    }
    catch(err){
        res.status(400).json({message:err||"Request hotel not found in DB"});
    }
}

module.exports = singleHotelController;