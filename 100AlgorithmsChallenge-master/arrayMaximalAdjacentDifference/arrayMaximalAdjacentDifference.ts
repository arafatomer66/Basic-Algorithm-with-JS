function arrayMaximalAdjacentDifference(inputArray: number[]): number {
   let value : number[] = [] ;
   let max : number = 0 ;
   for(let i = 0 ; i < inputArray.length - 1  ; i ++){
       value.push(Math.abs(inputArray[i] - inputArray[i+1 ])) ;
   }

   console.log(value);

   value.forEach(element => {
       if(element > max){
           max = element ;
       }
   });

   return max ;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0 ,6]));