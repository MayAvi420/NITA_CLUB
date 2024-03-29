const express  = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/authenticate');

require('../db/conn.js');
const User = require('../model/userSchema')


router.get('/',(req,res)=>{
    res.send(`Welcome in Router space`);
});

//PROMISES

// router.post('/register',(req,res)=>{
//     const {name,email,phone,work,password ,cpassword} = req.body;

//     if(!name || !email || !phone || !work || !password || !cpassword)
//     {return res.status(422).json({error:"Filled it properly"});}

//     User.findOne({email:email}).then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({error: "Email already exist"});
//          }

//          const user = new User({name,email,phone,work,password ,cpassword});

//          user.save().then(()=>{
//             res.status(201).json({
//                 message: "user registered successfully"
//             }).catch((err)=>{
//                 res.status(500).json({
//                     message: "Failed to registered"
//                 })
//             })
//          }).catch(err =>{console.log(err);});
//     })
// });



//BY ASYNC AND AWAIT 

router.post('/register',async(req,res)=>{
    const {name,email,phone,work,password ,cpassword} = req.body;

    if(!name || !email || !phone || !work || !password || !cpassword)
    {return res.status(422).json({error:"Filled it properly"});}

    try {
        const userExist = await User.findOne({email:email});
            if(userExist){
                return res.status(422).json({error: "Email already exist"});
             }else if (password != cpassword) {
                return res.status(422).json({error : 'password are not matching'})
             }else{
                const user = new User({name,email,phone,work,password,cpassword});
             
                await user.save();
                res.status(201).json({
                            message: "user registered successfully"
                        });
             }
    
            }      
    catch(err) {
        console.log(err);
    }
    
});


//LOGIN ROUTE

router.post('/signin',async(req,res)=>{
    try {
        const {email,password} = req.body
        if (!email || !password){
            return res.status(400).json({error:'Please filled data correctly'})
        }
        const userLogin = await User.findOne({email:email});
        if (userLogin) {
            const isMatch = await bcrypt.compare(password,userLogin.password);

        // TOKEN GENERATION
            const token = await userLogin.generateAuthToken();
            console.log(token);

    //COOKIES
            res.cookie("jwtoken", token , {
                expires: new Date (Date.now() + 25892000000),
                httpOnly:true
            });


            if(!isMatch){
                res.status(400).json({error: "Invalid credentials"});
            }
        else{
            res.json({message:"User login successfully"});
        }
        } else {
            res.status(400).json({error: "Invalid credentials"});

        }
    } catch (err) {
        console.log(err);
    } 
})


// ABOUT Page


router.get('/about',authenticate,(req,res)=>{
    // console.log(`Hello my about`);
    res.send(req.user);
})


module.exports = router;
