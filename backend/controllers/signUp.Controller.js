
const signUpValidation=require("../schemas/signnUp.validation");
const{zod}=require("zod");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const { User } = require("../models/userSchema");
const {addBalance}=require("../controllers/creareAccountController");
const Account=require("../models/bankSchema");
exports.signUp=async(req,res)=>{
    const{body}=req.body;
    console.log(body,">>body")
    const{data}=signUpValidation.safeParse(req.body);
        if(!data){
            return res.status(401).json({
                success:false,
                message:"Please enter valid details"
            })
        }
        const{username, password, firstName, lastName}=data
        console.log(username, password, firstName, lastName>>"data from body");
    try {
    
        
        // find if already exist
        const userExist=await User.findOne(
            {
                username:username
            }
        )
        if(userExist){
            return res.status(400).json({
                success:false,
                message:"User already exist"
            })
        }
        // else create user
        const hashedPassword=await bcrypt.hash(password,10);
        
        
        const userData=await User.create({
            username,
            password:hashedPassword,
            firstName,
            lastName
        })
        const userId = userData._id;
        const token = jwt.sign({ userId: userId }, process.env.JWT_SECRET);
;
        console.log(token,">>token from signp")
        const options={
            expires:new Date(Date.now()+3*24*60*60*1000),
            httpOnly:true,
        }
        const balanceAmount=1+Math.random()*1000;
        const addBalanceAmount=await addBalance(userId,balanceAmount);
        console.log(userData,">>>userData")
        return res.cookie("token",token,options).status(200).json({
            success:true,
            message:"User created successfully",
            token:token,
            data:{
                userId:userId,
                firstName,
                lastName,
                username
            },
            balance:addBalanceAmount.balance
        })
        
    } catch (error) {
        console.log(error,"error while creating user");
        return res.status(500).json({
            success:false,
            message:error
        })
        
    }
}