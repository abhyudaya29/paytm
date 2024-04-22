const mongoose=require("mongoose");
require('dotenv').config();

const dataBaseConnection=async()=>{
    try {
        const dbConnect=await mongoose.connect(process.env.MONGO_URL);
        console.log(`DataBase connection successfull at ${dbConnect.connection.host}`)
        
    } catch (error) {
        console.log(error,">>error while db connection");
        throw Error
        
    }
    
}
module.exports={dataBaseConnection}