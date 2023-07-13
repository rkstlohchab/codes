let iphone = true;
let p = new Promise((resolve, reject) => {
    if(iphone == 'true'){
        resolve("She is there");
    }
    else {
        // throw new Error("Break up");
        reject("break up");
    }
})

setTimeout(() => {
    p.then((message)=>{
        console.log(message)
    })//then mein resolve jaata h
    .catch((msg) => {
        console.log(msg);
    })
}, 3000);