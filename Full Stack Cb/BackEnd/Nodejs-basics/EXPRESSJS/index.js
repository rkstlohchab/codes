const express = require('express');
const app = express();
const PORT = 4444;


app.get('/',(req,res)=>{
    res.send("Hello World");
})
app.get('/hello',(req,res)=>{
    res.send("Hello Friend");
})
app.get('/hello',(req,res)=>{
    res.send("Hello Friend");
})

app.get('/hello', (req, res)=>{
    const {name,hobby}=req.query
    res.send(name,hobby)
})


app.listen(PORT,()=>{
    console.log("server started at http://localhost:"+PORT)
});