
const UserController = require("../controllers/user.controllers")

module.exports = app => {
    app.get("/api/users/new", UserController.allUsers)
    app.post("/api/companies/new", UserController.createUser)
}