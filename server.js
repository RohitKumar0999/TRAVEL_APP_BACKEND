const express = require("express");
const hotelRouter = require("./Routes/hotel.router");
const connectDB = require("./config/db.config");
const { default: mongoose } = require("mongoose");
const app = express();
const hotelsInDB = require("./Routes/dataImport.router")
const CategoriesInDB = require("./Routes/categoryImport.router")
const Categories = require("./Routes/categories.router");
const SingleHotelInDB = require("./Routes/singlehotel.router");
const Register = require("./Routes/auth.router");
const WishlistRouter = require("./Routes/wishlist.router");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const PORT = 3600
connectDB();

mongoose.connection.once("open",()=>{
    app.listen(PORT,()=>{
        console.log(`Your Applicaiton is running on ${PORT} Port`)
    })

})
app.use(express.json());
app.use(cors);

app.get("/",(req,res)=>{
    console.log(req.body);
    res.send("HEllo World");
})

app.use("/api/hotelData/hotel",hotelsInDB)
app.use("/hotels",hotelRouter);
app.use("/api/hotels/uploadcategory",CategoriesInDB)
app.use("/api/hotels/category",Categories);
app.use("/api/hotels",SingleHotelInDB);
app.use("/api/auth",Register);
app.use("/api/wishlist",WishlistRouter)