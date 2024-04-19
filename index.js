const express = require('express')

const path=require('path');

const http=require('http')

const app = express()


var bodyParser=require("body-parser");



app.use(express.static(path.join(__dirname, 'assets')));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'index.html'));
})
app.get('/formal',(req,res)=>{
  res.sendFile(path.join(__dirname,'formal.html'));
})
app.get('/men',(req,res)=>{
  res.sendFile(path.join(__dirname,'men.html'));
})
app.get('/women',(req,res)=>{
  res.sendFile(path.join(__dirname,'women.html'));
})
app.get('/login',(req,res)=>{
  res.sendFile(path.join(__dirname,'login.html'));
})

const port = process.env.PORT || 3000;
app.listen(port);