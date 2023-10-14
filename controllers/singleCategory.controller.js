const Hotel = require("../models/hotel.model");
const SingleCategory = async(req,res)=>{
    console.log(req.query);
    
 try{

     const CategoryHotels = await Hotel.find(req.query);
      res.status(200).json(CategoryHotels);

 }
 catch(err){
    console.log(err);
 }

}

module.exports = SingleCategory;