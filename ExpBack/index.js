const express = require("express");
const app = express();
const path = require('path')
const port = 4000;
const hbs = require('hbs')
const partialsPath = path.join(__dirname, "partials");
hbs.registerPartials(partialsPath);

app.use(express.static(path.join(__dirname, '../public')))

app.set('view engine', 'hbs')

app.get("/", (req,res) =>{
  res.render("index",{
    userName: "rkstlohchab",
  })
})

//asterik is used to select all undefined paths request made ny user and give them same output
app.get("*", (req,res)=>{
  res.render('404', {
    error404:"oops page not found!"
  })
})

// app.get("/", function (req, res) {
//   res.send("Hello World");
// });

app.listen(port, ()=>{
    console.log(`runnin at port ${port}`)
});
