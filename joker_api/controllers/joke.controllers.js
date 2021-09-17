const { create } = require("../models/joke.models")
const Jokes = require("../models/joke.models")


module.exports.test = (req,res) => {
    res.json("TESTING")
}

//create***************
module.exports.createJoke = (req,res) =>{
    Joke.create(req.body)
        .then(newJoke => res.json(newJoke))//sucess
        .catch(err => res.json(err))//not sucess
}

//read****************
module.exports.allJokes = (req,res)=>{
    Joke.find({})
        .then(allJokes => res.json(allJokes))
        .catch(err => res.json(err))
}

module.exports.oneJoke=(req,res) =>{
    const {joke_id}= req.params

    Joke.find({_id: joke_id })
        .then(oneJoke => res.json(oneJoke))
        .catch(err=> res.json(err))
}

//update**********************
module.exports.updateJoke=(req,res) =>{
    const {joke_id}= req.params

    Joke.findByIdAndUpdate({_id: joke_id}, req.body,{new:true})
        .then(updatedJoke => res.json(updatedJoke))
        .catch(err=> res.json(err))
}

////delete******************
module.exports.deleteJoke=(req,res) =>{
    const {joke_id}= req.params

    Joke.findByIdAndDelete({_id: joke_id})
        .then(response => res.json(response))
        .catch(err=> res.json(err))
}