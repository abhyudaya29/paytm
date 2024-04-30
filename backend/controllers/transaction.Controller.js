const User=require("../models/userSchema");
const Account=require("../models/bankSchema");
const mongoose=require("mongoose");

exports.transactions=async (req,res)=>{
    const session=await mongoose.startSession();
    // console.log(session,">>>session")

    session.startTransaction();
    const{amount,to}=req.body;
    console.log(amount,">>amount");
    console.log(to,">>jisko bhejna hai")
    

    try {
        const account=await Account.findOne({
            userId:req.userId
        }).session(session);
        console.log(account,">>account info");
        if(!account||account.balance<amount){
            await session.abortTransaction();
            return res.status(404).json({
                success:false,
                message:"Not Enough Balance"
            })
        }
        const toAccount=await Account.findOne({
            userId:to
        }).session(session)
        console.log(toAccount,">>to account info");
        if(!toAccount){
            await session.abortTransaction();
            return res.status(404).json({
                success:false,
                message:"User not exist"
            })
        }
        const updateUserBalance=await Account.updateOne({
            userId:req.userId
        },{
            $inc:{
                balance:-amount
            }
        }
        ).session(session)
        console.log(updateUserBalance,"updateUserBalance info");
        const otherUserBalance=await Account.updateOne({
            userId:to
        },
    {
        $inc:{
            balance:+amount
        }
    }).session(session);
    console.log(otherUserBalance,">>>otherUserBalance")
    await session.commitTransaction();
    return res.status(200).json({
        success:true,
        message:"Transfer successful",
        data:{
            updateUserBalance:account.balance,
            otherUserBalance:toAccount.balance

            
        }

    })


        
    } catch (error) {
        console.log(error,"Error occured in transaction");
        return res.status(500).json({
            success:false,
            message:error
        })
        
    }

}