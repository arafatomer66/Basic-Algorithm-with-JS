function allLongestStrings(inputArray: string[]): string[] {

    let longestWord = 0 ;

    const arr = [ ] ;
    
    inputArray.forEach((word : string) => {
        if(word.length >= longestWord){
            longestWord = word.length ;
        }
    });
    
    for(let i = 0 ; i < inputArray.length ; i++){
        if (inputArray[i].length === longestWord){
            arr.push(inputArray[i]);
        }
    }
    return arr ;
}

console.log(allLongestStrings(["aba", "aa" ,'abc','abcd' , "a" ,"asdfg"]));