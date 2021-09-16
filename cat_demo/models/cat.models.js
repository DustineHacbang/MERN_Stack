const mongoose = require("mongoose")

//defined the schema
const CatSchema = new mongoose.Schema({
    name : {
        type: String,
        require: [true, "Cat name must be required"]
    }, 
    type :{
        type: String,
        require: [true, "Cat type must be required"]
    },
    age : {
        type: Number,
        require: [true, "Cat age must be required"],
        min : [0, "Cat Age must be positive"]
    },
    fixed : {
        type: Boolean,
        require: [true, "Cat fixed must be required"]
    },
    color :{
        type: String,
        require: [true, "Cat color must be required"]
    }
}, {timestamp:true})

//registering the schema
const Cat = mongoose.model("Cat", CatSchema)

module.exports = Cat