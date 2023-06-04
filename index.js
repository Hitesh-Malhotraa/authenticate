const express=require('express');
const app=express();
const body=require('body-parser');
app.use(body.urlencoded({ extended: false }))
app.listen('3000',()=>{
    console.log('server listening at port 3000');
})
app.set('view engine','ejs');
const path=require('path');
app.get('/',(req,res)=>{
    res.render('home');
})
app.get('/login',(req,res)=>{
    res.render('form');
})
app.post('/logged',(req,res)=>{
    const {email,password}=req.body;
    console.log({email,password});
    res.render('home');
})