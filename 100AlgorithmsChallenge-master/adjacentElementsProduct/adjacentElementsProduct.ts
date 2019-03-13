function adjacentElementsProduct(inputArray: number[]): number {
     const arr : any = [];
    for(let i = 0 ; i < inputArray.length -1  ; i++){
        const sum = (inputArray[i] * inputArray[i+1]) ;
        arr.push(sum) ;
        console.log(sum);
    }
    console.log(arr);
    let biggestNum = 0  ;
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] > biggestNum){
            biggestNum = arr[i] ;
        }
    }
    console.log(biggestNum) ;
    return ; 
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));