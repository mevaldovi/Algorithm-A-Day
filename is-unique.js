//write code to create a function that accepts an array of numbers
//return 'true' if each number in its own individual array is unique, else return 'false'
// Driver code 
const ar = [2, 3, 5, 4, 5, 3, 4];
const n = ar.length;

function findSingle(ar, ar_size)
    {
        // Do XOR of all elements and return
        let res = ar[0];
        for (let i = 1; i < ar_size; i++)
            res = res ^ ar[i];
 
        return res;
    }
        console.log("Element occurring once is "
            + findSingle(ar, n));

// const testArr = [1, 1, 4, 7, 6, 8, 8]; //return false
// const testArr2 = [1, 2, 5, 6]; //return true

// const isUnique = function(arr) {


//   for (i = 0; i < arr.length; i++) {
//     //if an array includes a single element more than once, return false
//     if (arr.some(arr=> arr.arrindexOf(arr) >= 0)) {
//       console.log("false");
//     } else {
//       console.log("true");
//     }
//   }
// };

// isUnique(testArr);


// function containsAny(source,target)
// {
//     var result = source.filter(function(item){ 
//     return target.indexOf(item) > -1
//   });   
//     return (result.length > 0);  
// }    

// //results

// const testArr = [1, 1, 4, 7, 6, 8, 8]; //return false
// const testArr2 = [1, 2, 5, 6]; //return true

// console.log(containsAny(testArr, result));

// var fruits = ["apple","banana","orange"];

// console.log(containsAny(fruits,["apple","grape"]));//true
// console.log(containsAny(fruits,["apple","banana","pineapple"]));//true
// console.log(containsAny(fruits,["grape", "pineapple"]));//false
 
