//with loops 

function factorial (num) {
    let result = 1 ;
    for(let i = 1 ; i < num ; i ++ ){
        result *= i ;
    }
    return result ;
}

console.log(factorial(4));


//with recursion 

function recfactorial (num) {
    return num === 0 ? 1 : num * recfactorial(num - 1);
}

console.log(recfactorial(4));