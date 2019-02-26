const cars = ['🚗', '🚙'];
const trucks = ['🚚', '🚛'];
const combined = cars.concat(trucks);

// [ '🚗', '🚙', '🚚', '🚛' ]

console.log(cars); // ['🚗', '🚙'];
console.log(trucks); // ['🚚', '🚛'];



// Version A:prefered
const combinedA = [].concat(cars, trucks , '🚛');
// Version B:
const combinedB = cars.concat(trucks);

console.log(combinedA);
console.log(combinedB);



// const cars = ['🚗', '🚙'];
// const trucks = ['🚚', '🚛'];
// const combined = cars.push(...trucks);
// console.log(combined); // 4
// // ☝when you use push, it returns the LENGTH of the combined array
// console.log(cars); // [ '🚗', '🚙', '🚚', '🚛' ]
// console.log(trucks); // ['🚚', '🚛']

