const express = require('express');
const { status } = require('express/lib/response');
require('dotenv').config()
const mysql = require('mysql2');


const DB = mysql.createPool({
  host: 'localhost',
  user: 'root',
  port:'3306',
<<<<<<< Updated upstream
  password: 'AWSaccount123',
=======
  password: 'MYSQLaccount123',
>>>>>>> Stashed changes
  database: 'material motors',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

DB.getConnection((err, connection) => {
  if (err) throw err;
  console.log('Connected!');
  connection.release();
});
module.exports = DB


