'use strict';
var a = 5;
var b = "Hello";
var c = true;
let d = 10.11;

const e = "Hello World";


// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// let x = {
//     a:100,
//     b:"string",
//     c:true
// }

// console.log(x.a);
// console.log(x.b);
// console.log(x.c);

let obj = {
    '':'Emppty string',
    ' ':'space',
    a:10
};

console.log(obj['']);
console.log(obj[' ']);
console.log(obj['a']);


let arr = [
    "hello", 1,2,3,"world",true
];

console.log(arr);

for(let i=0; i<arr.length; i++) {
    console.log(arr[i]);
}



let obj1 = {
    x:'Emppty string',
    y:'space',
    z:10
};

for (let i in obj1){
    console.log(obj1[i])
}