function containsDuplicates(a: number[]) {
    a = a.sort((a,b) => a-b) ;
    for(let i = 0 ; i < a.length ; i++){
        if(a[i] == a[i+1]){
            return false ;
        }
    }
    return true  ;
}
console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));
