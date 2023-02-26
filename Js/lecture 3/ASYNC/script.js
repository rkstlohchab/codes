// setTimeout (function(){
//     console.log("Hello")
// }, 3000);

// let id = setInterval (function(){
//     console.log("Yes");
// }, 1);

// setTimeout(function(){
//     clearInterval(id);
// }, 3000);

let id = setInterval(() => {
    console.log("Hello");
}, 10, setTimeout(() => {
    clearInterval(id);
}, 3000));
let a = b