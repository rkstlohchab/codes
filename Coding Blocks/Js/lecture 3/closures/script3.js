function add(firstNumber) {
    if ( !firstNumber) return 0;
    let sum = firstNumber;
    function addMore(nextNumber){
        if ( !nextNumber) return sum;
        sum += nextNumber;
        return addMore;
    }
    return addMore;
}

console.log(add(1)(2)())