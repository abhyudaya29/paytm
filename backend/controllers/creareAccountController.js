const User=require("../models/userSchema");
const Account=require("../models/bankSchema");

exports.addBalance = async (userId, balanceAmount) => {
    try {
        // Create a new account entry with the provided userId and balance amount
        const newAccount = await Account.create({
            userId,
            balance: balanceAmount
        });
        
        // Log the created account for debugging
        console.log(newAccount, "Added Amount");

        // Check if the account creation was successful
        if (!newAccount) {
            throw new Error("Failed to add amount");
        }

        // Return a success message and the new balance
        return {
            success: true,
            message: "Amount added successfully",
            balance: newAccount.balance
        };

    } catch (error) {
        console.error("Error occurred during add balance:", error);
        return {
            success: false,
            message: error.message
        };
    }
};
