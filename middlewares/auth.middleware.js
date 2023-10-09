const jwt = require("jsonwebtoken");

const verifyUser = (req, res, next) => {
    console.log(req.rawHeaders[1]);
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token,process.env.ACCESS_TOKEN,(err,user)=>{
        if(err){
            res.status(403).json({message:"Token is not valid"})
        }

        req.user=user;
        next();
    });
      }
      else{
        res.status(400).json({message:"Token is not provided"})
      }
};

module.exports = verifyUser;