function findEmailDomain(address: string): string {
   let lastIndex : number = address.lastIndexOf('@');

   return address.slice(lastIndex+1 , address.length)

}

console.log(findEmailDomain('prettyandsimple@example.com'));
console.log(findEmailDomain('<>[]:,;@\"!#$%&*+-/=?^_{}| ~.a\"@example.org'));
