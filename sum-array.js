//Write code to add all the numbers in 'arr' and return the total
const array = [1,2,3];

let sum = 0;


const sumArray = function(arr){
    for (i=0; i<arr.length; i++){
        //console each number's index POSITION in the array
        sum += arr[i];
        // return total;
    }
    console.log(sum);    
}
sumArray(array);

//NOTE: += is simply shorthand for adding two variables to each other and then storing the result
