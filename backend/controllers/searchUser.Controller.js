const  {User}  = require("../models/userSchema");

exports.searchUser=async(req,res)=>{
    const filter=req.query.filter ||"";
    console.log(filter,"??filter")
    try {
        const users=await User.find({
            $or:[
                {
                    firstName:{
                        "$regex":filter
                    }
                },
                {
                    lastName:{
                        "$regex":filter
                    }
                },
                {
                    username:{
                        "$regex":filter
                    }
                }
            ]
        });
        console.log(users,">>>users")
        if(!users){
            return res.json({
                success:false,
                message:"No user found"
            })
        }
        return res.status(200).json({
            success:true,
            message:"Users fetched",
            user: users.map((name) => ({
                username: name.username,
                firstName: name.firstName,
                lastName: name.lastName,
                _id: name._id
            }))
        });


        
    } catch (error) {
        console.log(error,"error while searching user");
        return res.status(500).json({
            success:false,
            message:`${error} during searchUser`
        })
        
    }
}