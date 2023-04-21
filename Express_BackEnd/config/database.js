const express = require('express');
const { status } = require('express/lib/response');
require('dotenv').config()
const mysql = require('mysql2');


const DB = mysql.createPool({
  host: 'materialmotors.cejtlrnme2eg.ap-south-1.rds.amazonaws.com',
  user: 'admin',
  port:'3306',
  password: 'AWSaccount123',
  database: 'materialmotors',
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


