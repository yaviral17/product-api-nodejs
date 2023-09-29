const mongoose = require("mongoose");

const porductSchema = new mongoose.Schema(
    {
        orderNo : {
            type:Number,
            required:true
        },
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: [true, "price must be provided"]
        },
        feature: {
            type: Boolean,
            default: false
        },
        rating: {
            type: Number,
            default: 4.9
        },
        createdAt: {
            type: Date,
            default: Date.now()
        },
        company: {
            type: String,
            enum: {
                values: ["apple", "samsung", "dell", "mi", "hp", "realme", "oneplus","iq","infinix","motorola","nokia","poco","vivo","nothing","ineplus"],
                message: `{VALUES} is not supported`,
            },
        },
    }
);



module.exports = mongoose.model('Product',porductSchema);