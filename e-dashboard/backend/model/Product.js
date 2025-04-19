const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name:String,
    price:String,
    category:String,
    company:String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})
module.exports = mongoose.model("Product",ProductSchema)