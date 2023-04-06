
const express = require('express');
const pool = require('../Express_BackEnd/config/database.js')
require('dotenv').config()
const app = express();
const port = process.env.PORT
app.use(express.json())
var cors = require('cors')
app.use(cors())

// const userRouter = express.Router();
// app.use('/login',userRouter);
// userRouter.route('/')
// userRouter.post(LoginUser)
const DBLoginCreds = []
pool.query('SELECT * FROM User_Details', (error, results) => {
        if (error) throw error;
        // console.log(results);
        DBLoginCreds.push(results)
});

app.listen(port, (req, res) => {
        console.log('Welcome To Material_Motors')
        //     console.log(pool)
})



app.post('/login', function LoginUser(req, res) {
        // console.log(req.body)
        // console.log(DBLoginCreds[0])
        let login = [];
        for (let i = 0; i < DBLoginCreds[0].length; i++) {
                if (DBLoginCreds[0][i].email_id == req.body.username && DBLoginCreds[0][i].password == req.body.password) {
                        // console.log(req.body.username,req.body.password)
                        // console.log(DBLoginCreds[0][i].email_id,DBLoginCreds[0][i].password)
                        login.push(DBLoginCreds[0][i])
                        console.log(login)
                }
        }
        if (login.length == 0) {
                res.send(Data = {
                        data: {},
                        message: 'Invalid Credentials',
                        status: false
                })
        } else {
                if (login[0].email_id == req.body.username && login[0].password == req.body.password) {
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
        }


})

app.post('/signup', async function Signupuser(req, res) {
 if (req.body.firstname && req.body.lastname && req.body.email_id && req.body.phone && req.body.password) {
        if (req.body.phone) {
        const phone_Search = `SELECT phone FROM user_details WHERE user_details.phone = '${req.body.phone}'`;
                pool.query(phone_Search, async (error, results) => {
                        if (error) {
                                res.send(error)
                        }
                        if (results.length !== 0 && results[0].phone === req.body.phone) {
                                res.send(Data = {
                                        data: {},
                                        message: 'Phone Number Already Exists',
                                        status: true
                                }
                                )
                        } else if(req.body.email_id){
   const Email_Search = `SELECT email_id FROM user_details WHERE user_details.email_id = '${req.body.email_id}'`;
                pool.query(Email_Search, async (error, results) => {

                        if (error) {
                                res.send(error)
                        }
                        if (results.length !== 0 && results[0].email_id === req.body.email_id) {
                                res.send(Data = {
                                        data: {},
                                        message: 'Email_id Already Exists',
                                        status: true
                                }
                                )
                        } else {
                                const sqlQuery = `INSERT INTO user_details (firstname,lastname,email_id,phone,passcode) VALUES ('${req.body.firstname}','${req.body.lastname}','${req.body.email_id}','${req.body.phone}','${req.body.password}')`;
                                pool.query(sqlQuery, (error, results) => {
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
                        } else{
                                res.send(Data = {
                                        data: {},
                                        message: 'Please enter correct Email ID or Phone Number',
                                        status: false
                                })
                        }
                })

        } 
        }else {
                res.send(Data = {
                        data: {},
                        message: 'Please Fill all Details',
                        status: false
                })
        }

})