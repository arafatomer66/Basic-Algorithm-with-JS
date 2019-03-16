function alphabetSubsequence(s: string): boolean {
    const char : string[] = s.split('') ;
    const num : number[] = [] ;
    char.forEach(element => {
        num.push(element.charCodeAt(0));
    });
    console.log(num) ;
     //duplicate value detection
    if(new Set(num).size != num.length){
        return false ;
    }

    for(let i = 0 ; i < num.length ; i++){
        if(num[i] >= num[i+1] ){
            return false ;
        }
    }

    return true ;
}

console.log(alphabetSubsequence('abc')) ;
// console.log(alphabetSubsequence('effg'))
// console.log(alphabetSubsequence('cdce'))
// console.log(alphabetSubsequence('ace'))
// console.log(alphabetSubsequence('bxz'))
