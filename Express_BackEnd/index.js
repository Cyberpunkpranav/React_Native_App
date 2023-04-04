
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
const DBLoginCreds= []
pool.query('SELECT * FROM new_user', (error, results) => {
        if (error) throw error;
        // console.log(results);
        DBLoginCreds.push(results)
      });

app.listen(port, (req, res) => {
    console.log('Welcome To Material_Motors')
//     console.log(pool)
})



app.post('/login',function LoginUser(req, res){
        // console.log(req.body)
        console.log(DBLoginCreds[0])
        let login =[];
        for(let i=0;i<DBLoginCreds[0].length;i++){ 
        if(DBLoginCreds[0][i].email_id == req.body.username && DBLoginCreds[0][i].password ==req.body.password){
        // console.log(req.body.username,req.body.password)
        // console.log(DBLoginCreds[0][i].email_id,DBLoginCreds[0][i].password)
        login.push(DBLoginCreds[0][i])
        console.log(login)
        }
}
if(login.length==0){
        res.send(Data={
                data:{},
                message:'Invalid Credentials',
                status:false
        })
}else{
if(login[0].email_id == req.body.username && login[0].password ==req.body.password){
        res.send(Data={
                data:{},
                message:'Login successfully',
                status:true
        })
}else{
        res.send(Data={
                data:{},
                message:'Invalid Credentials',
                status:false
        })
}
}       


}) 

app.post('/signup',function Signupuser(req,res){
        pool.query()
})