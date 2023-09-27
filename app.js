require("dotenv").config();
const { log } = require('console');
const express = require('express');
const app = express();
const connectDB = require("./db/connect");

const PORT = process.env.PORT || 3000

const products_route = require("./routes/products");

app.get("/",(req,res)=>{
    res.send("connected!");
});

app.use("/api/products",products_route);

const start = async(req,res)=>{
    try {
        await connectDB(process.env.DB_URI);
        console.log("db connected!");
        app.listen(PORT, () => {
            console.log(`API is live on ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();