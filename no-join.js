// Write a function that takes in an array of digits representing a non negative integer 
//and add one to it. The digits are arranged such that the 
//most significant digits are on the left and each element in the array contains a single digit
// Return the new array
// Solve without joining the digits array and modify the original array in place

const test = [1,2,9]
 var plusOne = function(digits){
     const len = digits.length;

     if(len === 0){
         return 1;
     }
     let last = len - 1;

     if(digits[last] === 9){
        console.log(plusOne(digits.slice(0, last)).concat([0]));
     }
     console.log(digits.slice(0, last).concat([digits[last] + 1]));
 }
 plusOne(test);