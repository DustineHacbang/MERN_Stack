
const {Book} = require ("../models/book.models")

module.exports.test =(req,res) =>{
    res.json("Hello World")
}

//create
module.exports.newBook = (req,res) => {
    Booke.create(req.body)
    .then( newBook => require.json(newBook))
    .catch(err=>res.json(err))
    
}