const ProductController = require("../controllers/product.controllers")


module.exports = app => {
    app.get("/api/products/test", ProductController.test),
    app.post("/api/products", ProductController.newProduct),
    app.get("/api/products", ProductController.allProducts),
    app.get("/api/products/:id", ProductController.oneProduct),
    app.put("/api/products/:id", ProductController.updateProduct),
    app.delete("/api/products/:id", ProductController.deleteProduct)
}