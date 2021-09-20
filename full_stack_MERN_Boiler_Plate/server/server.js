////1. import dependencies
const express = require("express")
const cors = require("cors")
const app = express()
const port = 8000

////1.5. Config mongoose

////2. config express
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true }))
////3.attach routes to your express server

const bookRoutes = require("./routes/books.routes")
bookRoutes(app)

////4.run express server
app.listen(port,() => console.log(`EXPRESS SERVER RUNING ON ${port}`))