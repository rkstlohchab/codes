function outerFun(){
    console.log("Inside outer fun");
    let a = 1;

    function innerFun(){
        console.log("Inside Inner fun");

        a++;
        return a;
    }

    return innerFun;
}

let fun = outerFun();
console.log(fun()); //2

