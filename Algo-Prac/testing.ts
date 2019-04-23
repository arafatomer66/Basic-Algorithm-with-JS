


const numArr : number[] = [1,2,3,4,5,6]; 

//1 no test 
// console.time('1');
// for(let i ; i < numArr.length ; i ++){
//     console.log(numArr[i]);
// }
// console.timeEnd('1');

//2 no test

console.time();
numArr.forEach(element => {
    console.log(element);
});
console.timeEnd();