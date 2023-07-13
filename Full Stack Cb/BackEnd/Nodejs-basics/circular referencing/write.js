const fs = require('fs')
const path = require('path')
let movieDir = path.join(__dirname,'movies.json')
fs.writeFile(
    movieDir,
    `
        {name:"hera pheri"}
        {name:"dhol"}
        {name:"johnwick"}
    `,
    {
        encoding:'utf8',
        flag:'a'
    }, ((err)=>{
        if(!err) console.log("success")
        else console.log(err.message)
    })
)