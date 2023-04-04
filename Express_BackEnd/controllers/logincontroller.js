const express = require('express');
require('dotenv').config()
const app = express();
const db = require('../config/database');


db.getConnection((err, conn) => {
    conn.query('SELECT * FROM new_user', (error, results, fields) => {
      // get the results
      conn.release();
      if (err) {
        console.error(err);
        res.status(500).send('Error fetching users from database');
      } else {
        res.send(results);
      }
    });
  });
