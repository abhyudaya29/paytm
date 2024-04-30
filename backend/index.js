const express = require("express");
const dotenv = require('dotenv');
const cors = require("cors");
const { dataBaseConnection } = require('./db/dbConfig');
const userRoute = require("./routes/userRoute");
const accountRouter = require("./routes/addBalanceRoute");

dotenv.config();

const app = express();

// Middleware to remove X-Powered-By header
app.use((req, res, next) => {
    res.removeHeader('X-Powered-By');
    next();
});

app.use(express.json());
app.use(cors());

// need to figure out cors for origin

const PORT = process.env.PORT || 5000;

dataBaseConnection();

app.use('/api/v1', userRoute);
app.use('/api/v1', accountRouter);

app.listen(PORT, () => {
    console.log(`Server is running on : ${PORT}`);
});
