function arrayConversion(inputArray: number[]): number {
    let isOdd : boolean = true ;
    while(inputArray.length !== 1){
        inputArray = someProducts(inputArray , isOdd)
        isOdd = !isOdd ;
    }
 return inputArray[0] ;
}
function someProducts( nums : number[] , isOdd : boolean ) : number[]{
    let  somePro : number[] = [] ;
    if(isOdd){
        for(    let i =  0 ; i < nums.length ; i = i + 2     ){
            somePro.push(nums[i] + nums[i+1]) 
        }
    } else{
        for(    let i =  0 ; i < nums.length ; i = i + 2    ){
            somePro.push(   nums[i] * nums[i+1]    ) 
        }
    }
    return somePro  ;
}
console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));

