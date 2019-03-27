  console.log("");


  //find uniqe element in js array 
const array = [1, 1, 2, 3, 5, 5, 1] ;
const uniqueArray = [...new Set(array)];
console.log(uniqueArray); 

//faster for loop

for (let i = 0, length = array.length; i < length; i++){
  console.log(i);
}


// alternative to ternary

let one = 1, two = 2, three = 3;
console.log(one && two && three); // Result: 3
console.log(0 && null); // Result: 0

let one = 1, two = 2, three = 3;
console.log(one || two || three); // Result: 1
console.log(0 && null); // Result: null


// // With ||
// return (foo || []).length;
// // With &&
// return ([] && foo).length;


//short form
if (this.state.data) {
  return this.state.data;
} else {
  return 'Fetching Data';
}

//--
// return (this.state.data || 'Fetching Data');


// We can easily switch between true and false by using the negative operator ! , which will also convert the type to "boolean" .

// const true  = !0;
// const false = !1;
// const alsoFalse = !!0;
// console.log(true); // Result: true
// console.log(typeof true); // Result: "boolean"



//convert to string  
const val = 1 + "";
console.log(val); // Result: "1"
console.log(typeof val); // Result: "string"



//convert to int

let int = "15";
int = +int;
console.log(int); // Result: 15
console.log(typeof int); Result: "number"

console.log(+true);  // Return: 1
console.log(+false); 


const int = ~~"15" ;
console.log(int); // Result: 15
console.log(typeof int); Result: "number"

//power 

console.log(2 ** 3); // Result: 8


//quck rounding 

console.log(23.9 | 0);  // Result: 23
console.log(-23.9 | 0); // Result: -23


//trink an array - no splice() slice ()

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
array.length = 4;
console.log(array); // Result: [0, 1, 2, 3]


//get last values of an array 

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array.slice(-1)); // Result: [9]
console.log(array.slice(-2)); // Result: [8, 9]
console.log(array.slice(-3)); // Result: [7, 8, 9]



//json encoded 

console.log(JSON.stringify({ alpha: 'A', beta: 'B' }, null, '\t'));
// Result:
// '{
//     "alpha": A,
//     "beta": B
// }'

