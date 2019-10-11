
const express = require('express');
const app = express();

app.use(express.json());


app.use("/targets", require('./routes/targetRouter.js'))

app.listen(7000, () => {
    console.log("server is running on port 7000")
})
