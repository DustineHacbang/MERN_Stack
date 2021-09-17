const JokeController = require("../controllers/joke.controllers")

module.exports = app =>{
    app.get("/api/test", JokeController.test)
   // create
    app.post("/api/jokes", JokeController.createJoke)
    //read

    app.get("/api/jokes", JokeController.allJokes)
    app.get("/api/jokes/:joke_id", JokeController.oneJoke)

    //update
    app.put("/api/jokes/:joke_id", JokeController.updateJoke)

    //delete
    app.delete("/api/jokes/:joke_id", JokeController.deleteJoke)

}