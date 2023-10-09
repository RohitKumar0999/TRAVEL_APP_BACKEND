const express= require("express");

const router = express.Router();
const Hotel = require("../models/hotelCategory.model");
const categories = require("../data/categoryData");

try{
    
    router.route("/")
    .post(async(req,res)=>{
    const CategoryDB = await Hotel.insertMany(categories.data);
    res.json(CategoryDB);
    })
}
catch(err){
    console.log(err);
    res.json({message:"Could not add data to DB"});
}
module.exports=router;

