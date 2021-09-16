const CatController = require("../controllers/cat.controller")

module.exports = app =>{
    app.get("/api/test", CatController.test)
   // create
    app.post("/api/cats", CatController.createCat)
    //read

    app.get("/api/cats", CatController.allCats)
    app.get("/api/cats/:cat_id", CatController.oneCat)

    //update
    app.put("/api/cats/:cat_id", CatController.updateCat)

    //delete
    app.delete("/api/cats/:cat_id", CatController.deleteCat)

}