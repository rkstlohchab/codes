function houseTask(Safai, Bartan){
    Safai();
    Bartan();

    return dihadiMilGai();
    // return dihadiMilGai();
}

function jhaaduLagana(){
    console.log("safai ho gai");
}
function bartanDhona(){
    console.log("bartan dhul gya");
}
function dihadiMilGai(){
    console.log("dihadi mil gai");
}

// let x = houseTask(jhaaduLagana,bartanDhona)
// x();


let x = houseTask(jhaaduLagana,bartanDhona);
console.log(x);