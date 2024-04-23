const express = require('express');
const cors = require('cors');
const {UserAuthentication, IsAdmin}= require('./authentication');

const app= express();
app.use(cors())//Third party middleware
app.use(express.json())//inbuild middleware JSON parser

app.set('view engine','pug');//set viwe engine

app.get('/welcome',(req,res)=>{
    res.render('index')
})

app.get('/message',(req,res)=>{
    res.render('message',{title:'Greeting',message:'Welcome and Good Evening all'});

})

app.get('/users',(req,res)=>{
    res.render('users',{
        users:[
            {id:1,Name:'Ravi',Email:'ravi@gmail.com',Country:'Ind'},
            {id:1,Name:'Priyank',Email:'priyank@gmail.com',Country:'US'},
            {id:1,Name:'Sanjay',Email:'sanjay@gmail.com',Country:'UK'}
        ]
    });

})

app.use((req,res,next)=>{
    console.log('General Middleware');
    next();
})// Costome middleware

//2nd option is called as middle ware

app.get('/profile',UserAuthentication,(req,res)=>{
    res.send('Profile page')
})

app.get('/sales',UserAuthentication,IsAdmin,(req,res)=>{
    res.send('Usersales page')
})

app.get('/',(req,res)=>{
    res.send('Home page')
})

app.use('/info',express.static('website'))

app.use('/api/product', require("./productrouter"))

app.listen(5000,()=>{
    console.log('Server Started');
})