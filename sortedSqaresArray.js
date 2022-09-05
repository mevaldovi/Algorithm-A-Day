// Sorted Squared Array from Algoexpert.com

//Given an array of integers that are sorted in increasing order, 
//write a function that squares all the integers in the array and returns them in a new array, 
//also sorted in increasing order.

function sortedSquaredArray(array) {
    const sortedSquares = new Array(array.length).fill(0);
    let smallerValueIdx = 0; 
    let largerValueIdx = array.length - 1; //reps the last number in the index of the array
  
    for (let idx = array.length - 1; idx >= 0; idx--) {
      const smallerValue = array[smallerValueIdx];
      const largerValue = array[largerValueIdx];
      if (Math.abs(smallerValue) >= Math.abs(largerValue)) {
        sortedSquares[idx] = smallerValue * smallerValue;
        smallerValueIdx++;
      } else {
        sortedSquares[idx] = largerValue * largerValue;
        largerValueIdx--;
      }
    }
    return sortedSquares;
  }





















// ---------------------- WARNING ANSWER DOWN BELOW --------------------------------  







// let array = [1, 2, 3, 5, 6, 8, 9];

// function sortedSquaredArray(array) {
//     let test = 123
//     const newArray = new Array(array.length).fill(0)
//     for (let i = 0; i < array.length; i++) {
//         let value = array[i];
//         newArray[i] = value * value;

//     }
//     console.log
//     return test;
// }

// sortedSquaredArray(array)
// console.log('here is our array: ' + sortedSquaredArray(array));