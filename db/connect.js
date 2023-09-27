const { default: mongoose } = require("mongoose");





const connectDB = (db_uri) => {
    return mongoose.connect(db_uri, { useNewUrlParser: true, useUnifiedTopology: true, });
};
module.exports = connectDB;