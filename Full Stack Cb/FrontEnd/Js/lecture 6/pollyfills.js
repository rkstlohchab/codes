let array = [1,2,3,4,5,6,7,8,9]
function mapPollyFill(arr,cb){
    let resultArr = [];
    for (let i=0; i<length; i++){
        resultArr.push(cb(arr[i]))
    }

    return resultArr;
}

function cb(x){
    return x*x;
}
console.log(mapPollyFill(array,cb))
