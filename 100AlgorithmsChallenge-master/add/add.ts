function add(param1: number, param2: number): number {
   return (param1 + param2);
}

 function add2(...param1: number[]): number {
     let sumNum = 0  ;
    param1.forEach( (element) => {
       sumNum = sumNum + element ;
   });

   return  sumNum ;
 }


 // ... takes a value and turns it into an array 



 console.log(add(1, 2));
 console.log(add(3, 2));

 console.log(add2(1,2,3,4,5));
// console.log(add2(2,3));

