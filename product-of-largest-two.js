// Write code to create a function that accepts an array of numbers, 
//finds the largest two numbers, and returns the product of the two
const array = [1, 10, 5, 20];//output 200

var productOfLargestTwo = function(arr) {
    for (i=0; i < arr.length; i++){
        const sortedArr = arr.sort(function(a,b) {
            return(b - a);// [20, 10, 5, 1]
        })
        result = sortedArr[0] * sortedArr[1];
        console.log(result);
    }
};
productOfLargestTwo(array);

