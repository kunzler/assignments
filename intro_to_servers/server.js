const express = require('express')
//console.log(express)
const app = express()

// fake databaseq
const todos = [
    {title: "first todo", __id: "1451245"},
]

// server route to handle a get requet to a specific endpoint
app.get("/",(req, response)=>{
    response.send('hello world')
})






// takes two args. a call number and a port number pick number between 4k and 9k
app.listen(7000, () => {
    console.log("server is running on port 7000")
})
