function evenDigitsOnly(n: number): boolean {
   const digit =  n.toString().split('');
   
   return digit.every((element) => parseInt( element ) % 2 === 0
   ) ;
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));