const express = require('express');
require('dotenv').config()
const DB = require('../config/database');

async function Signupuser(req, res) {
    if (req.body.firstname && req.body.lastname && req.body.email_id && req.body.phone && req.body.password) {
        if (req.body.phone) {
            const phone_Search = `SELECT phone FROM user_details WHERE user_details.phone = '${req.body.phone}'`;
            DB.query(phone_Search, async (error, results) => {
                if (error) {
                    res.send(error)
                }
                if (results.length !== 0 && results[0].phone === req.body.phone) {
                    res.send(Data = {
                        data: {},
                        message: 'Phone Number Already Exists',
                        status: false
                    }
                    )
                } else if (req.body.email_id) {
                    const Email_Search = `SELECT email_id FROM user_details WHERE user_details.email_id = '${req.body.email_id}'`;
                    DB.query(Email_Search, async (error, results) => {

                        if (error) {
                            res.send(error)
                        }
                        if (results.length !== 0 && results[0].email_id === req.body.email_id) {
                            res.send(Data = {
                                data: {},
                                message: 'Email_id Already Exists',
                                status: false
                            }
                            )
                        } else {
                            const sqlQuery = `INSERT INTO user_details (firstname,lastname,email_id,phone,passcode) VALUES ('${req.body.firstname}','${req.body.lastname}','${req.body.email_id}','${req.body.phone}','${req.body.password}')`;
                            DB.query(sqlQuery, (error, results) => {
                                if (error) {
                                    res.send(error)
                                } else {
                                    res.send(Data = {
                                        data: {},
                                        message: 'Account Created Successfully',
                                        status: true
                                    })
                                }

                            });
                        }
                    })
                } else {
                    res.send(Data = {
                        data: {},
                        message: 'Please enter correct Email ID or Phone Number',
                        status: false
                    })
                }
            })

        }
    } else {
        res.send(Data = {
            data: {},
            message: 'Please Fill all Details',
            status: false
        })
    }

}
module.exports = { Signupuser }