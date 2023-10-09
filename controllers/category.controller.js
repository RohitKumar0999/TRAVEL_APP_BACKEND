const category = require('../models/hotelCategory.model');

const categoryHandler = async (req,res)=>{
    try{
        const categories = await category.find({})
        res.json(categories);
    }
    catch(err){
        res.status(404).json({message: err.message || "Could not find category" });
    }
}

module.exports = categoryHandler;