const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    title: {
        type : String,
        required: [true, "Title must be provided"]
    },
    price : {
        type : Number,
        required: [true, "price must be required"],
        min : [0, "You cannot have negative price"]
    },
    description : {
        type : String,
        required : [true, "Description name must be provided"]
    }
}, {timestamps:true})

module.exports.Product =  mongoose.model("Product", ProductSchema)