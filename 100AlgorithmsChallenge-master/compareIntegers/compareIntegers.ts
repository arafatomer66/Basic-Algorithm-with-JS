function compareIntegers(a: string, b: string): string {

    if(parseInt(a) > parseInt(b)){
        return "Its Greater ! "
    }  
    if(parseInt(a) < parseInt(b)) {
        return "Its Smaller !"
    }
    if(parseInt(a) === parseInt(b)){
        return  "Its Equal !"
    }

}
 

console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));