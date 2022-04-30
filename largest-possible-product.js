//Given an array of numbers, assuming they are all different, positive integers.
//Calculate the largest numher obtained by multiplying any two of those numbers
const nums = [3, 2, 5, 7, 9];
//sort the array from descending to ascending
const sortedArr = nums.sort(function(a, b){
    return a - b;
});
console.log(sortedArr); // now it's [2, 3, 5, 7, 9]
console.log(sortedArr[sortedArr.length - 1] * sortedArr[sortedArr.length - 2])
//take the element at index position[4] which = 9 * element @ index position[3] which = 7
//multiple 9 * 7 = 63

