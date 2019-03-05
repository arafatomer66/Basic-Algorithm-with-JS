const person = {
    name: 'Wes Bos',
    age: 80
  };


const person2 = Object.assign({} , person , {id : 1});

console.log(person2);