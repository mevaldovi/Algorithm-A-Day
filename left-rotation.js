//Write a function that takes an array and a positive integer and "rotates" the array to the left 
//by the integer.
//Modify the original array rather than returning a new one
//There is no need to return from this function

const testArray = [1,2,3,4,5,6,7,8,9,10]

const leftRotation = (arr, positions) => {

    while (positions){
        arr.push(arr.shift())
        positions--;
        console.log(arr);
    }
}
leftRotation(testArray, 2)