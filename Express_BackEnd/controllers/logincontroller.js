const express = require('express');
const DB = require('../config/database.js')
require('dotenv').config()
const app = express();


async function LoginUser(req, res) {
  const searchquery = `SELECT * FROM User_Details WHERE email_id='${req.body.username}' AND passcode = '${req.body.password}'`
  DB.query(searchquery, async (err, results) => {
    if (err) {
      console.log(err)
      res.send(err)
    }
    if (results.length > 0) {
      res.send(Data = {
        data: {},
        message: 'Login successfully',
        status: true
      })
    } else {
      res.send(Data = {
        data: {},
        message: 'Invalid Credentials',
        status: false
      })
    }

  })
}
module.exports = { LoginUser }