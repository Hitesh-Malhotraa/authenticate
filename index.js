const express=require('express');
const app=express();
const body=require('body-parser');
const flash=require('connect-flash');
app.use(flash());
app.use(body.urlencoded({ extended: false }))
app.listen('3000',()=>{
    console.log('server listening at port 3000');
})
const session=require('express-session');
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))
app.set('view engine','ejs');
const path=require('path');
app.get('/home',(req,res)=>{
    res.render('home',{msg:req.flash('name')});
})
app.get('/login',(req,res)=>{
    res.render('form');
    // res.send('hello');
})
app.post('/logged',(req,res)=>{
    const {email,password}=req.body;
    console.log({email,password});
    res.render('profile');
})
app.get('/login/2',(req,res)=>{
    res.send('hello parent');
})
app.post('/profile',(req,res)=>{
const {name,address,phnno}=req.body;
console.log(name,address,phnno);
// req.session.name=name;
req.flash('success',`hello ${name}`);
res.redirect('/');
})
app.get('/', (req, res) => {
    req.flash('message', 'Success!!');
    res.redirect('/gfg');
  });
    
  app.get('/gfg', (req, res) => {
      res.send(req.flash('message'));
  });