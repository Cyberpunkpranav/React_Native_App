const express = require('express');
const { status } = require('express/lib/response');
require('dotenv').config()
const app = express();
const mysql = require('mysql2');


const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'MYSQLaccount123',
    database: 'material motors',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });
  
  
  
  module.exports = pool


