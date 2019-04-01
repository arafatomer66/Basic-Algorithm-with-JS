let arr = [], set = new Set(), n = 1000000;
for (let i = 0; i < n; i++) {
  arr.push(i);
  set.add(i);
}

//add

console.time('Array'); 
result = checkArr(arr, 123123); 
console.timeEnd('Array');
console.time('Set'); 
result = checkSet(set, 123123); 
console.timeEnd('Set');

//delete 

const deleteFromArr = (arr, item) => {
    let index = arr.indexOf(item);
    return index !== -1 && arr.splice(index, 1);
  };



  //removing duplicate


  const duplicateCollection = ['A', 'B', 'B', 'C', 'D', 'B', 'C'];

// If you want to turn the array into a Set
let uniqueCollection = new Set(duplicateCollection);

console.log(uniqueCollection) // Result: Set(4) {"A", "B", "C", "D"}

// If you want to keep your values in an array

let uniqueCollection = [...new Set(duplicateCollection)];


console.log(uniqueCollection) // Result: ["A", "B", "C", "D"]