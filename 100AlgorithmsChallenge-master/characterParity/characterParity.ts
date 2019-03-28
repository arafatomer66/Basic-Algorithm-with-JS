function characterParity(symbol: string) {
   let result = parseInt(symbol);

   return isNaN(result) ? 'Not a Digit' : result % 2 ==0 ? 'even' : 'odd' ; 
}

console.log(characterParity('5'))
console.log(characterParity('8'))
console.log(characterParity('q'))
    