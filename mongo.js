//Create
db.students.insert({name: "Dustine", home_state: "CA", lucky_number: 7, birthday: {month: 05, day: 26, year: 1997}})
db.students.insert({name: "Dave", home_state: "CA", lucky_number: 70, birthday: {month: 10, day: 16, year: 1990}})


//Read
db.students.find({}).pretty()
db.students.find({name:"Dustine"}).pretty()


//Update
db.students.update({name:"Dustine"}, {lucky_number: 26}) //Update need 2 arguments
db.students.update({name:"Dave"}, {$set : {lucky_number: 26}})
//removes a specific trait
db.students.update({name:"Dave"}, {$unset : {lucky_number: 26}})



//Delete
db.students.remove({ _id: ObjectId("61424ee8fe5e42d1d6da9a6b")})
db.students.remove({ _id: ObjectId("61424ee8fe5e42d1d6da9a6b")})
