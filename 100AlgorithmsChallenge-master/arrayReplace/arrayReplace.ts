function arrayReplace(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
    let newArr : number[] = [];
    inputArray.map(element => {
       if(element === elemToReplace){
           newArr.push(substitutionElem);
       }else {
           newArr.push(element);
       }
   });

//    inputArray.map( (element,index) => {
//     if(element === elemToReplace){
//         inputArray[index] = substitutionElem
//     }
// });
   return newArr ;
}

console.log(arrayReplace([1, 2, 1], 2, 3));