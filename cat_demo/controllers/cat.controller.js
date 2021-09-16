const { create } = require("../models/cat.models")
const Cat = require("../models/cat.models")


module.exports.test = (req,res) => {
    res.json("TESTING")
}

//create***************
module.exports.createCat = (req,res) =>{
    Cat.create(req.body)
        .then(newCat => res.json(newCat))//sucess
        .catch(err => res.json(err))//not sucess
}

//read****************
module.exports.allCats = (req,res)=>{
    Cat.find({})
        .then(allCats => res.json(allCats))
        .catch(err => res.json(err))
}

module.exports.oneCat=(req,res) =>{
    const {cat_id}= req.params

    Cat.find({_id: cat_id })
        .then(oneCat => res.json(oneCat))
        .catch(err=> res.json(err))
}

//update**********************
module.exports.updateCat=(req,res) =>{
    const {cat_id}= req.params

    Cat.findByIdAndUpdate({_id: cat_id}, req.body,{new:true})
        .then(updatedCat => res.json(updatedCat))
        .catch(err=> res.json(err))
}

////delete******************
module.exports.deleteCat=(req,res) =>{
    const {cat_id}= req.params

    Cat.findByIdAndDelete({_id: cat_id})
        .then(response => res.json(response))
        .catch(err=> res.json(err))
}