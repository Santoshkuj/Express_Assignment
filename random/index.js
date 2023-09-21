const express = require("express");

const app = express();

const port = 3030;
let random = Math.round(Math.random()*100);

app.get('/random',(req,res) => {
    res.send(`{"random" : ${random}}`)
})
app.listen(port);