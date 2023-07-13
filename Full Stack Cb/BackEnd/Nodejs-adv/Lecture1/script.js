const path = require('path')
const express = require('express')
const app = express()
const PORT = 4444;

let flag = true;

app.use(express.static(path.join(__dirname,'public')));

app.use((req,res,next)=>{
    console.log("decoding the incoming request")
    next();
})

app.use((req,res,next)=>{
    console.log("doing some other task")
    next();
})

app.get('/',(req,res,next)=>{
    res.send("hello");
    next();
})

app.get('/img',(req,res,next)=>{
    if(flag) res.send("compresssing")
    else res.send("doing some other task")
    flag=!flag;
    next();
})

app.use((req,res,next)=>{
    console.log('sab kuch bhadia hai')
    next()
})


app.listen(PORT,()=>{
    console.log(PORT)
})