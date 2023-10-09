const express = require("express");
const router = express.Router();
const {createWishlistHandler,getWishlistHandler,deleteWishlistHandler} = require("../controllers/wishlist.controller")

router.route("/").post(createWishlistHandler);


router.route("/:id")
.delete(deleteWishlistHandler)

router.route("/")
.get(getWishlistHandler)

module.exports = router;
