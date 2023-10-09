const wishlist = require("../models/whislist.model");


const createWishlistHandler = async (req, res) => {
    const newWishlist = new wishlist(req.body);
    try {
      const savedWishlist = await newWishlist.save();
      savedWishlist
        ? res.status(201).json(savedWishlist)
        : res.status(400).json({ message: "Wishlist can not be created" });
    } catch (err) {
      console.log(err);
    }
  }

  const deleteWishlistHandler = async(req,res)=>{
    try{
        const deletedHotel = await wishlist.findByIdAndDelete(req.params.id)
        deletedHotel? res.status(200).json(deletedHotel):res.status(400).json({message:"Hotel doest not exist"});
    }
    catch(err){
        console.log(err);
    }
}

const getWishlistHandler = async(req,res)=>{
    try{
        const Wishlist = await wishlist.find({})
        Wishlist ? res.status(200).json(Wishlist) : res.status(401).json({message:"whislist Does not contain any item"});

    }
    catch(err){
        console.log(err);
    }
}


module.exports =  {createWishlistHandler,getWishlistHandler,deleteWishlistHandler} 