const express = require('express');
const { status } = require('express/lib/response');
require('dotenv').config()
const mysql = require('mysql2');


const DB = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'MYSQLaccount123',
    database: 'material motors',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });
  
  module.exports = DB


