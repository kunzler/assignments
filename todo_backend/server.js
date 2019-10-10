
const express = require('express');
const app = express();
const uuid = require('uuid/v4');
app.use(express.json());
// fake databaseq
const todos = [
    {title: "first todo", _id: uuid(),
    description: " first description",
    imgUrl: "https://unsplash.com/photos/pMW4jzELQCw",
    completed: false,},
    {title: "second todo", _id: uuid(),
    description: " 2 description",
    imgUrl: "https://unsplash.com/photos/pMW4jzELQCw",
    completed: false,},
    {title: "third todo", _id: uuid(),
    description: " 3 description",
    imgUrl: "https://unsplash.com/photos/pMW4jzELQCw",
    completed: false,},
    {title: "fourth todo", _id: uuid(),
    description: " 4 description",
    imgUrl: "https://unsplash.com/photos/pMW4jzELQCw",
    completed: false,}
    
];

app.get("/todos",(req, res)=>{
    console.log(todos);
    res.send(todos);
})

app.get("/todos/:_id", (req, res) => {
    const foundTodos = todos.find(todo => todo._id === req.params._id);
    console.log(foundTodos);

    res.send(foundTodos);
})

app.post("/todos", (req, res) => {
    const newTodo = req.body;
    newTodo._id = uuid();

    todos.push(newTodo);

    res.send(newTodo);
})


app.delete("/todos/:_id", (req, res) => {
    const todoIndexToDelete = todos.find(todo => todo._id === req.params._id);
    todos.splice(todoIndexToDelete, 1);
    res.send(`you deleted successfully`);
})

app.put("/todos/:_id", (req, res) => {
    const todoId = req.params._id;
    const todoToUpdate = todos.find(todo => todo._id === todoId);
    const indexToUpdate = todos.findIndex(todo => todo._id === todoId);
    const updatedTodo = Object.assign(todoToUpdate, req.body);
    todos.splice(indexToUpdate, 1, updatedTodo);
    res.send(updatedTodo);
})

app.listen(7000, () => {
    console.log("server is running on port 7000")
})
