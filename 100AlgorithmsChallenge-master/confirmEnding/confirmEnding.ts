function confirmEnding(str: string, target: string) {
  let  start = str.length - target.length ;

  return str.substr(start) == target ;
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));