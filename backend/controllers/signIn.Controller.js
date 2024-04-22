const {User}=require("../models/userSchema")
exports.signIn=async (req,res)=>{
    const{username,firstName}=req.body;

    try {
        const userExist=await User.find({
            username:username
        })
        console.log(userExist,"???user exist");
        if(!userExist){
            return res.status(404).json({
                success:false,
                message:"User not exist,Please SignIn"
            })
        }
        return res.status(200).json({
            success:true,
            message:"User Signed successfullt"
        })
        
    } catch (error) {
        console.log(error,"Error while signin");
        return res.status(500).json({
            success:false,
            message:error
        })
    }

}