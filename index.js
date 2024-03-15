const express = require("express");
const mysql = require('mysql');
const page = require('./routes/page')

const app = express();

app.get('/', (req, res) => {
    res.send('privet');
})

app.use('/poster', page)

app.get('/about', (req,res) => {

})
app.get('/price', (req, res) => {

})
app.get('/contacts', (req, res) => {
    
})


app.listen(3500)