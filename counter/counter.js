const express = require("express");

const PORT = 4003;
const HOSTNAME = "localhost";

let counter = 5;

const app = express();

app.get('/',(req,res) => {
    res.send(`{counter:${counter}}`)
});
app.get('/increment',(req,res) => {
    res.send(`{counter : ${counter+1}}`)
});
app.get('/decrement',(req,res) => {
    res.send(`{counter : ${counter-1}}`)
});

app.listen(PORT,()=>{console.log(`server is running at ${HOSTNAME}:${PORT}`)})