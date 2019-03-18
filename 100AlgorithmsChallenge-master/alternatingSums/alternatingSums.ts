function alternatingSums(a: number[]): number[] {
    let evenNum = 0 ;
    let OddNum = 0 ;
    a.forEach((element , index) => {
         if(index %2 === 0){
             evenNum = evenNum + element
         }else {
             OddNum = OddNum + element 
         }
    });
  return [evenNum , OddNum] ;
}

console.log(alternatingSums([1,2,3])) ;