
const express = require('express');
const app = express();
const uuid = require('uuid/v4');
app.use(express.json());
// fake databaseq

const targets = [
    {
        firstName: "Qui-Gon",
        lastName: "Jinn",
        _id: uuid(),
        imgUrl: "https://oyster.ignimgs.com/wordpress/stg.ign.com/2015/11/qui-gon-jinn.jpg",
        alive: true,
        bounty: 500,
        type: "Jedi"

    },
    {
        firstName: "Anakin",
        lastName: "Skywalker",
        _id: uuid(),
        imgUrl: "https://oyster.ignimgs.com/wordpress/stg.ign.com/2015/11/anakin-skywalker-300x445.jpg?dpr=2&fit=bounds&width=640&height=480",
        alive: true,
        bounty: 100000000,
        type: "Sith"
    }, 
    {
        firstName: "Quinlan",
        lastName: "Vos",
        _id: uuid(),
        imgUrl: "https://oyster.ignimgs.com/wordpress/stg.ign.com/2015/11/qui-gon-jinn.jpg",
        alive: true,
        bounty: 3500,
        type: "Jedi"
    },
    
];

app.get("/targets", (req, res) => {
    console.log(targets);
    res.send(targets);
})

app.get("/targets/:_id", (req, res) => {
    const foundTargets = targets.find(target => target._id === req.params._id);
    console.log(foundTargets);

    res.send(foundTargets);
})

app.post("/targets", (req, res) => {
    const newTarget = req.body;
    newTarget._id = uuid();

    targets.push(newTarget);

    res.send(newTarget);
})


app.delete("/targets/:_id", (req, res) => {
    const targetIndexToDelete = targets.find(target => target._id === req.params._id);
    targets.splice(targetIndexToDelete, 1);
    res.send(`you deleted successfully`);
})

app.put("/targets/:_id", (req, res) => {
    const targetId = req.params._id;
    const targetToUpdate = targets.find(target => target._id === targetId);
    const indexToUpdate = targets.findIndex(target => target._id === targetId);
    const updatedtarget = Object.assign(targetToUpdate, req.body);
    targets.splice(indexToUpdate, 1, updatedtarget);
    res.send(updatedtarget);
})

app.listen(7000, () => {
    console.log("server is running on port 7000")
})
