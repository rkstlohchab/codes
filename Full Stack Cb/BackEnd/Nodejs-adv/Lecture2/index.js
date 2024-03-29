const path = require('path');
const express = require('express');
const app = express();
const PORT = 3333;

app.use(express.static(path.join(__dirname,'public')));

app.use(express.urlencoded({extended:true}));

let tasks = [];

app.get('/addtask',(req,res)=>{
    console.log(req.query);
    tasks.push(req.query.task);
    res.send("Recieved add task request");
})

app.get('/gettask',(req,res)=>{
    console.log(req.query);
    tasks.push(req.query.task);
    res.send("Recieved add task request");
    req.redirect("/")
})

app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});