const mongoose = require("mongoose")

const BookSchema = mongoose.Schema({

        title:{
            type:String,
            require:[true, "title must be provided"]
        
        },
        pages: {
            type: Number,
            min: [0,"You cannot have negative pages"]
        },
        auther:{
            type:String,
            require:[true,"Author name must be provided"]
        }


}, {timestamp:true})

module.exports.Book = mongoose.model("Book",BookSchema)