//write code to create a function that accepts an array of numbers
//return 'true' if each number in its own individual array is unique, else return 'false'
// Driver code 


const testArr = [1, 1, 4, 7, 6, 8, 8]; //return false
const testArr2 = [1, 2, 5, 6]; //return true

const isUnique = function(arr) {


  for (i = 0; i < arr.length; i++) {
    //if an array includes a single element more than once, return false
    if (arr.some(arr=> indexOf(arr) >= 0)) {
      console.log("false");
    } else {
      console.log("true");
    }
  }
};

isUnique(testArr);



 
