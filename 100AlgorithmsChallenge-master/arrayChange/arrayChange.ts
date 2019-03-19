function arrayChange(inputArray: number[]): number {
   let count = 0 ;
    for(let i = 0 ; i < inputArray.length ; i++){
        if(inputArray[i]>= inputArray[i+1]){
            const dif =(inputArray[i]+1) - inputArray[i+1];
            inputArray[i+1] = inputArray[i]+1;   
            count = count + dif ;
        }
    }
   return  count;
}

console.log(arrayChange([1, 2, 3,4,6,5]));