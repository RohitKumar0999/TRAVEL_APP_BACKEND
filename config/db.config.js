const dotenv= require("dotenv");
const  mongoose  = require("mongoose");

dotenv.config();

const DB_URL =  process.env.DB_URL;

const connectDB = async()=>{

    try{
        
        await mongoose.connect(DB_URL,{
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log("Connected to DB successfully");
}
catch(err){
console.log(err);
}
    }


module.exports= connectDB;