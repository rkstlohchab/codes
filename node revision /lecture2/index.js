const path = require('path')
const express = require('express')
const app = express();
const PORT = 4444;

app.use(express.static(path.join(__dirname, "public")));
app.set('view engine','hbs')
app.use(express.urlencoded({extended:true}))


app.get('/index', (req,res)=>{
    res.render('index',{
        title:'Todo App',
        name:'Kartikey',
        hobby:'Kuwara Baap'
    })
})


let todos = [
  { task: "Swimming", id: 1 },
  { task: "dancing", id: 2 },
  { task: "reading", id: 3 },
  { task: "movie", id: 4 },
  { task: "gaming", id: 5 },
];

app.get('/gettodo',(req,res)=>{
    res.render('todos',{
        todos
    })
})

app.listen(PORT,()=>{
    console.log(PORT)
})