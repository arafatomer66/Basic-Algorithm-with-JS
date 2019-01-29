var arr1 = [1,5,8,9];
arr1.slice(1); // [5,8,9]


var arr1 = [1,5,8,9];
console.log(arr1.slice(1,3));
//[ 5, 8 ]


var arr1 = [1,5,8,9];
console.log(arr1.slice(-2));
//[ 8, 9 ]


var arr1 = [1,5,8,9];
arr1.slice(2);
console.log(arr1);
// [ 1, 5, 8, 9 ]


// ---------------------------------------------------------


var arr1 = [1,5,8,9];
console.log(arr1.splice(1,2));
// [ 5, 8 ]


var arr1 = [1,5,8,9];
arr1.splice(1,2,'Hi','Medium');
console.log(arr1);
// [ 1, 'Hi', 'Medium', 9 ]


function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let array2Copy = [...arr2];
    array2Copy.splice(n,0, ...arr1);
                 //console.log(array2Copy);
    return array2Copy;
    }
    frankenSplice([1, 2, 3], [4, 5, 6], 1);