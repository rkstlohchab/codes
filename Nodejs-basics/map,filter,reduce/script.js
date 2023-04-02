//map: creates new arry
let arr = [1,2,3,4,5];
let arr2 = arr.map((v,indx,arr)=>{
    return v*v;
})



//filter: creates new array
let arr3 = arr.filter((v)=>{
    if(v%2==0) return true;
    else return false;
})
console.log(arr3)



//reduce: 
let sum = arr.reduce((accum,val,indx,arr)=>{
    return accum + val;
}, 1)