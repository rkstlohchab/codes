function goaTrip(padhaiKaro){
    return new Promise((resolve,reject)=>{
        if(padhaiKaro == false){
            return reject("Ghar par baitho");
        }
        setTimeout(() => {
            resolve("Cracked!!");
        }, 3000);
    })
}

let p = goaTrip(true);

p.then((message) => {
    console.log(message);
})
.catch((err)=>{
    console.log(err);
})