const mongoose = require("mongoose");

require('dotenv').config()

const connectDb = async (url) => {
 return mongoose.connect(url).then((url) => console.log("success"));
}


module.exports = connectDb