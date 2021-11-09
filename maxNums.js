//write code to return the largest number in the given array
const array = [1,2,3,4,5,0];
//sort from smallest value to highest given a - b
const newArray = array.sort(function(a, b){return a - b});

const maxNum = function(arr){
    console.log(arr[arr.length - 1]);
    //^aka saying "log the array's length (which is 6) and subtract one to get 
    //the maximum number of index positions in array"
};
maxNum(newArray);