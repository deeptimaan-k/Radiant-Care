import jwt from 'jsonwebtoken';
import User from "../models/UserSchema.js";

export const authentication= async(req,res,next)=>{

    //get token from header
    const authToken=req.headers.authorization

    //check token exists
    if(!authToken || !authToken.startsWith('Bearer ')){
        return res.status(401).json({success: false, message: 'No token, authorization denied'})
    }

    try {
        const token=authToken.split(" ")[1];

        const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY)
        req.userId=decoded.id;
        req.role=decoded.role;

        next(); 
    } catch (error) {
        if(error.name === 'TokenExpiredError'){
            return res.status(401).json({message:'Token is expired'});
        }
        return res.status(401).json({statue:false, message:'Invalid token'});
    }
}

export const restrict =(roles)=>async(req, res, next) => {
    const userId=req.userId;
    let user;
    const patient=await User.findById(userId);

    if(patient){
        user=patient
    }

    if(!roles.includes(user.role)){
        return res.status(401).json({success:false, message:'You are not authorized'})
    }
    next();

}