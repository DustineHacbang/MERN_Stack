const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/book_demo",{
    useNewUrlParser: true,
    useUnifiedTopology:true,
})
.then(()=> console.log( "connected to full mern demo db"))
.catch(err => console.log("ERROR:", err))