const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    number:{
        type:Number,
        required:true,
        unique:true
    }
},
{
    timestamps:true
})

const Users = mongoose.model("Users",userSchema);

module.exports= Users;