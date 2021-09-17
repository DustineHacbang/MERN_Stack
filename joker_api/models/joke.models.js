const mongoose = require("mongoose")

//defined the schema
const JokeSchema = new mongoose.Schema({
    setup : {
        type: String,
    }, 
    punchline :{
        type: String,
    },
}, {timestamp:true})

//registering the schema
const Joke = mongoose.model("Joke", JokeSchema)

module.exports = Joke