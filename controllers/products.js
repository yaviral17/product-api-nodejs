const getAllProductes = async(req,res)=>{
    res.status(200).json({msg:"I am getAllProducts"});
};
const getAllProductesTesting = async(req,res)=>{
    res.status(200).json({msg:"I am getAllProductsTesting"});
};

module.exports = {getAllProductes,getAllProductesTesting};