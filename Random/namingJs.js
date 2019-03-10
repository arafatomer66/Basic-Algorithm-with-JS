function createSentence(words , puncuation){
   const sentence = words.join(' ');
   return sentence + puncuation ;
}

const words = ['Hi' , 'my' , 'name' , 'is' , 'Arafat'];
const puncuation = ' !' ;

const sentence = createSentence(words , puncuation);

console.log(sentence) ;



// getUserPosts - more specific 

// findUserByEmail - more specific

