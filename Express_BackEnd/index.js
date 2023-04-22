
const express = require('express');
require('dotenv').config()
const routes = require('../Express_BackEnd/routes/authroutes')
const { LoginUser } = require('../Express_BackEnd/controllers/logincontroller')
const { Signupuser } = require('../Express_BackEnd/controllers/signupcontroller')
const app = express();
const port = process.env.PORT
app.use(express.json())
var cors = require('cors')
app.use(cors())


app.listen(port, (req, res) => {
        console.log(`Server is running on port ${port}`)

})


const userRouter = express.Router();
app.use(userRouter)

userRouter.post('/login', LoginUser)
userRouter.post('/signup', Signupuser)
