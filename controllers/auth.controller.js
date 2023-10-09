const Users = require("../models/user.model");
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken");

const signUpHandler = async(req,res)=>{
    
    const newUser = new Users(
        {
        name:req.body.name,
        number:req.body.number,
        email:req.body.email,
        password:CryptoJS.AES.encrypt(req.body.password,process.env.MY_SECRET_KEY ).toString()
});
    
    try{

         const createdUser=await newUser.save()
        res.status(201).json(createdUser);
    }
    catch(err){
        res.status(501).json({message:err.message||"User can not be created"});
    }

}


const signInHandler = async(req,res)=>{
    const number = req.body.number;
try{

    const fetchUser = await Users.findOne({number})
    !fetchUser && res.status(401).json("Incorrect Mobile number")
    // console.log("password"+fetchUser.password);
    // console.log(process.env.MY_SECRET_KEY);
    console.log(fetchUser.password);
    console.log(process.env.MY_SECRET_KEY);
    const decodedPassword = CryptoJS.AES.decrypt(fetchUser.password , process.env.MY_SECRET_KEY).toString(CryptoJS.enc.Utf8);
    // console.log(req.body.password);
    decodedPassword!==req.body.password  && res.status(401).json("Incorrect password")
      console.log(decodedPassword);
      console.log(req.body.password);
    const {password,...rest} = fetchUser._doc;
    const accessToken = jwt.sign({username:fetchUser.name},process.env.ACCESS_TOKEN);
    res.json({...rest,accessToken});
}
catch(err){
    console.log(err);
}
}

module.exports = {signUpHandler,signInHandler};