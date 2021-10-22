//write code to create a function that accepts an array of numbers
//return 'true' is no number appears in the array more than once, else return 'false'
// const testArr = [1, 1, 4, 7, 6, 8, 8]; //return false
// const testArr2 = [1, 2, 5, 6]; //return true

// const isUnique = function(arr) {
//   let newArr = [];
//   for (i = 0; i < arr.length; i++) {
//     if (arr.includes([i])) {
//       console.log("false");
//     } else {
//       console.log("true");
//     }
//   }
// };
// isUnique(testArr2);

const array = [-3, -2, -1, 0, 1, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; //return false

function isUnique(arr) {
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (arr.includes([i])) {
      console.log("false");
    } else {
      console.log("true");
    }
  }
}
console.log(isUnique(array, [i])); 
