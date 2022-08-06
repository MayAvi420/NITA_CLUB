const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');


dotenv.config({path:'./config.env'});

//database
require('./db/conn.js');

//UserSchema(Model)
const User = require('./model/userSchema')

app.use(express.json());

app.use(cookieParser());

//Router 
app.use(require('./router/auth'));

const PORT = process.env.PORT;

//Middleware  

// const middleware = (req,res,next) =>{
//     console.log(`Hello My Middleware`);
//     next();
// }

// app.get('/',(req,res)=>{
//     res.send(`hello world`);
// })

// app.get('/about',middleware,(req,res)=>{
//     console.log(`Hello my about`);
//     res.send(`Welcome to about page`);
// })
// app.get('/contact',(req,res)=>{
//     res.send(`Welcome to contact page`);
// })
// app.get('/signin',(req,res)=>{
//     res.send(`Welcome to signin page`);
// })
// app.get('/signup',(req,res)=>{
//     res.send(`Welcome to signup page`);
// })


app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
})