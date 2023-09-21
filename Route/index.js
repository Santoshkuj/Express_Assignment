const express = require('express');

const App = express();

App.get('/',(req,res) =>{
    res.send('i am home page')
});
App.get('/about',(req,res) =>{
    res.send('{msg :`i am about page`}')
});
App.get('/contact',(req,res) =>{
    res.send('{msg :`support@pwskill.com`}')
})

App.listen(3002,() => {
    console.log('server is running at port 3002');
})