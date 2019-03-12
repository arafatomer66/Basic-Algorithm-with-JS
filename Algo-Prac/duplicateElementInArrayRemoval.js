//1
const array = [1,1,2,2,3,3,4,4,5,5] ;
const uniqueArray =  new Set(array);
const backToArray = [...uniqueArray];
console.log(backToArray); 

//remove duplicate elements