// TODO: Write a function that takes an array of integers containing exactly one peak.
// A peak is defined as a location in the array where the value is greater than every number to the left and every number to the right. 
//Return the value found at the array's peak
const array = [1, 3, 50, 5, 5, 3, 1]
let mid = Math.floor(array.length*0.5);

const peakFinder = function(arr) {
    console.log(mid)
    //if statement
        if (array[mid+1]>array[mid]){
            console.log(peakFinder(array.slice(mid+1)));
        } else if (array[mid-1]>array[mid]){
            let newArray = array.reverse().slice(mid+1).reverse()
            console.log(peakFinder(newArray))
        } else{
            console.log(array[mid])
        }
    };
  peakFinder(array);