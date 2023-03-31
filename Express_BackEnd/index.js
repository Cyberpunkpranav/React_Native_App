
const express = require('express');
require('dotenv').config()
const app = express();
const port = process.env.PORT
console.log(port, 'Hello')

app.get(`/`, (req, res) => {
        res.send('Material Motors')


})
app.get(`/login`, (req, res) => {
    
        console.log('login')
        res.send('Material Motors Login')

})
app.listen(port, (req, res) => {
    console.log('Welcome To Material_Motors')
})