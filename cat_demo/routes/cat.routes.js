const CatController = require("../controllers/cat.controller")

modules.exports = app =>{
    app.get("/api/test", CatController.test)
}