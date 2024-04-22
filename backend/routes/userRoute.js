const express=require("express");
const router=express.Router();
const {signUp}=require("../controllers/signUp.Controller");
const { authMiddleware } = require("../middlwares/auth.middleware");
const{searchUser}=require("../controllers/searchUser.Controller");
const{addBalance}=require("../controllers/creareAccountController")
const{signIn}=require("../controllers/signIn.Controller");
router.get('/user',(req,res)=>{
    res.status(200).json({
        success:true,
        message:"Welcome"
    })
})
router.post('/signUp',signUp,addBalance);
router.post('/signin',signIn);
router.get('/user/bulk',searchUser)
module.exports=router