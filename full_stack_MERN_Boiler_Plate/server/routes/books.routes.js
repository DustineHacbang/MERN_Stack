const BookController = require("../controllers/books.controllers")
module.exports = app =>{
    app.get("/api/books/test", BookController.test)
}