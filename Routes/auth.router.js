const express = require("express");
const Users = require("../models/user.model");
const router = express.Router();
const CryptoJS = require("crypto-js");

const verifyUser = require("../middlewares/auth.middleware");
const {signUpHandler,signInHandler} = require("../controllers/auth.controller");

router.route("/register")
.post(signUpHandler)

router .route("/signin")
.get(signInHandler)

module.exports = router;