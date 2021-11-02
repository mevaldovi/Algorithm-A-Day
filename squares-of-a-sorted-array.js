// Write code to create a function that accepts an array of integers sorted in ascending 
//(increasing) order and returns a new array containing 
//the squares of each number in ascending order
const array1 = [1,4,6,9]//output: [1,16,36,81]

var sortedSquares = function(arr) {
    let sortedArray = arr.sort(function(a,b){return a - b});
    const newArr = new Array(sortedArray.length).fill(0)
        for (let i=0; i < sortedArray.length; i++){
            let value = arr[i];
            newArr[i] = value * value;
        }
        
        console.log(newArr);
};
sortedSquares(array1);