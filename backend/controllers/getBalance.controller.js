const Account=require("../models/bankSchema");
const {User}=require("../models/userSchema");

exports.getBalance = async (req, res) => {
    const userId=req.userId
    console.log(userId, ">>user id for get balance");
    try {
        const getBalanceCheck = await Account.findOne({
            userId: req.userId
        });

        if (!getBalanceCheck) {
            // Account not found
            return res.status(404).json({
                success: false,
                message: "Account not found"
            });
        }

        console.log(getBalanceCheck, ">>balance data");
        return res.status(200).json({
            success: true,
            message: "Balance fetched",
            balance: getBalanceCheck.balance
        });
        
    } catch (error) {
        console.log(error, ">>error occurred while getting balance");
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}

