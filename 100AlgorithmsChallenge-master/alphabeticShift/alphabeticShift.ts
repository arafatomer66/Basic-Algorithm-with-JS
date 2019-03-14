
function alphabeticShift(inputString: string): string {
  let arr = (inputString.split(''));
  let newArr = []; 
  arr.forEach(element => {
     newArr.push(String.fromCharCode(element.charCodeAt(0) + 1)); 
  });
  ;
  return newArr.join('') ;
}
console.log(alphabeticShift('abcd'));