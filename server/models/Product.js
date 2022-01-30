const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    title: {type:String},
    img: {type:String},
    price: {type:Number},
})

module.exports = mongoose.model("Product", UserSchema);