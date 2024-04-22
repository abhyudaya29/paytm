const express = require("express");
const dotenv = require('dotenv');
const cors=require("cors")
const {dataBaseConnection} =require('./db/dbConfig');
const userRoute=require("./routes/userRoute")
const accountRouter=require("./routes/addBalanceRoute");
dotenv.config()
const app=express();
app.use(express.json());
app.use(cors())
// need to fighue ot cors for origin
const PORT=process.env.PORT||5000
dataBaseConnection();
app.use('/api/v1',userRoute);
app.use('/api/v1',accountRouter)

app.listen(PORT,()=>{
    console.log(`Server is running on : ${PORT}`)
})