const Product = require("../models/product")


const getAllProductes = async(req,res)=>{
    const myData = await Product.find(req.query);
    res.status(200).json({data:myData});
};
const getAllProductesTesting = async(req,res)=>{
    const myData = await Product.find(req.query);
    res.status(200).json({data:myData});
};

module.exports = {getAllProductes,getAllProductesTesting};