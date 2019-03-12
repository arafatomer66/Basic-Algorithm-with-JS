function addTwoDigits(n: any): number {
   let num = n.toString().split('');
   return num.reduce((a : string , b : string) => {
       let  sum = parseInt(a) +  parseInt(b ) ;
       return sum ;
   });
}

 console.log(addTwoDigits(33));



//  The reduce() method reduces the array to a single value.

// The reduce() method executes a provided function for each value of the array (from left-to-right).

// The return value of the function is stored in an accumulator (result/total).