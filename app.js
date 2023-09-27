const { log } = require('console');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080

const products_route = require("./routes/products");

app.get("/",(req,res)=>{
    res.send("connected!");
});

app.use("/api/products",products_route);

const start = async(req,res)=>{
    try {
        app.listen(PORT, () => {
            console.log(`API is live on ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();