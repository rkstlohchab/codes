const lib1 = require('./lib1');

console.log("running lib2");

function sub(a,b){
    return a-b;
}

module.exports.sub = sub;
module.exports.lib2=lib2;