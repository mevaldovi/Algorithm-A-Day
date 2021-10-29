// Write code to create a function that accepts an array of numbers and returns a new array that corresponds to the original array
// If a element in the original array is even, the element at the same index in the new array should be double the original element
// If an element in the original array is odd, the element at the same index of the new array should be triple the original element
const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var doubleTripleMap = function (arr) {
  //expected output: [3,4,9,8,15,12,21,16,27,20]
  let result = [];

  for (let i = 1; i < arr.length + 1; i++) {
    if (i % 2 === 0) {
      result.push([i].map((x) => x * 2));
    } else {
      result.push([i].map((x) => x * 3));
    }
    console.log(result.join());
  }
};
doubleTripleMap(testArr);
