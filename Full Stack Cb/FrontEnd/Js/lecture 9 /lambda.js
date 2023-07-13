function fun(){
    console.log(this);
}

let obj = {
    name:"CodingBlocks",
    couse:"webd"
}

// arrow function m this kaam nahi karta


let person = {
    name:"vaibha",
    gambler:true,
    gambling: ()=>{
        console.log(this);
    }
}