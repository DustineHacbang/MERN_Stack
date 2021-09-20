

//1.IMPORT EXPRESS AND CREATE AN INSTANCE OF EXPRESS SERVER
const express = require("express")
const app = express()
var faker = require("faker")
const port = 8000




app.use(express.json())

class User{
    constructor(){
        this._id = faker.random.uuid()
        this.firstName=faker.name.firstName()
        this.lastName= faker.name.lastName()
        this.phoneNum=faker.phone.phoneNumber()
        this.email = faker.internet.email()
        this.internet = faker.internet.password()
    }
}

class Company{
    constructor(){
        this._id = faker.random.uuid()
        this.name=faker.company.companyName()
        this.adress= {
            street: faker.address.streetName(),
            street: faker.address.city(),
            street: faker.address.city(),
        }
    }
}

let user1=  new User()
console.log(user1)

let company1=  new Company()
console.log(company1)

app.get("/api/users/new" , (req,res) =>{
    let user1=  new User()
    console.log(user1)
    res.json({"result": user1})
})

app.get("/api/companies/new" , (req,res) =>{
    let company1=  new Company()
    console.log(company1)
    res.json({"result": company1})
})

app.get("/api/users/company" , (req,res) =>{
    let user1=  new User()
    let company1=  new Company()
    res.json({"user": user1, "comapny": company1})
})

//RUN YOUR EXPRESS SERVER
app.listen(port,() => console.log("EXPRESS SERVER RUNNING ON PORT:" + port ))