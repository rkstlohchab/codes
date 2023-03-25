//onload html k baad load hoga ya fir defer krdege 
// window.onload = function(){

// }


//SELECT ELEMENT
let elements = document.getElementsByTagName('div');
// console.log(elements)
// console.log(elements[0].children[0])


let lis = document.getElementsByClassName('item');
console.log(lis);

let cpp = document.getElementsById('cpp');
console.log(cpp);

//CREATE ELEMENT
let  li = document.createElement('li');
li.innerHTML = "<strong>ANdroid</strong>"

let ul = document.getElementById('courses');
ul.appendChild(li);

//TO SELECT WE