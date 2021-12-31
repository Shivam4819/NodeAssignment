const express= require('express')
const app= express()
require('dotenv/config')
const morgan=require('morgan')

const userRouter= require('./routers/users')

const api= process.env.API_URL
const mongoose = require('mongoose');
const cors = require('cors');



app.use(express.json());
app.use(morgan('tiny'));

app.use(cors());
app.options('*', cors())

app.use(`${api}/user`, userRouter)

app.listen(3000,()=>{
    console.log('server running on http://localhost:3000');
    console.log(api)
})

// to connect to mongo atlas
mongoose.connect(process.env.DB_CONNECTION_STRING)
.then(()=>{
    console.log('Db connection is ready....')
})
.catch((err)=>{
    console.log(err)
})