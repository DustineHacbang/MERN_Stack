const BookController = require("../controllers/books.controllers")
module.exports = app =>{
    app.get("/api/books/test", BookController.test)
    app.post("/api/book", BookController.newBook)
    app.get("/api/books", BookController.allBooks)
}
