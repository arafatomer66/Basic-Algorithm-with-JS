function checkPalindrome(inputString: string): boolean {
   let originalword = inputString.toLowerCase();
   let revWord = originalword.split('').reverse().join('');
   return originalword === revWord ;
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
