const lib2 = require('./lib2');

console.log("running lib1");

function add(a,b){
    return a+b;
}

module.exports.add = add;
module.exports.lib2=lib2;