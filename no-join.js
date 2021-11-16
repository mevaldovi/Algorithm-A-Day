// Write a function that takes in an array of digits representing a non negative integer 
//and add one to it. The digits are arranged such that the 
//most significant digits are on the left and each element in the array contains a single digit
// Return the new array
// Solve without joining the digits array and modify the original array in place

const array = [1,0,0]//representing number 100
var addOneNow = true;

var plusOne = function(digits) {
    while (let i = 0; i = digits.length - 1; i--){
        
        if (digits[i] < 9){
            digits[i]++;
            console.log(digits);
        } else {
            digits[i] = 0;
        }
    }
        if (addOneNow){
            digits.unshift(1)
        }
        console.log(digits)
    }
plusOne(array)