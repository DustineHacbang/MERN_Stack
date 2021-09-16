const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/cats_db",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("established a connection to database"))
    .catch(err => console.log("Somthing went wrong when connecting to the database", err));