//write code to create a function that accepts an array of numbers
//return 'true' if each number in its own individual array is unique, else return 'false'
// const testArr = [1, 1, 4, 7, 6, 8, 8]; //return false
// const testArr2 = [1, 2, 5, 6]; //return true

const unique = (value, index, self) => {
  return self.indexOf(value) === index
}
const testArr = [1, 1, 4, 7, 6, 8, 8]; //return false
const findUnique = testArr.filter(unique)

console.log(findUnique);


// const unique = (arr, value, index, self) => {
//   let i = arr[index];
//   if (i > -1) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// };
// unique(testArr);



// const isUnique = function(arr) {

//   for (i = 0; i < arr.length; i++) {
//     //if an array includes a single element more than once, return false
//     if (arr.some(arr=> indexOf(arr) >= 0)) {
//       console.log("false");
//     } else {
//       console.log("true");
//     }
//   }
// };

// isUnique(testArr);
