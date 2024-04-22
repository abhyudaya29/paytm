const express=require("express");
const router=express.Router();
const{getBalance}=require("../controllers/getBalance.controller")
const {authMiddleware}=require("../middlwares/auth.middleware")
const{transactions}=require("../controllers/transaction.Controller")

router.get('/account',authMiddleware,getBalance);
router.post('/transfer',authMiddleware,transactions);
module.exports=router