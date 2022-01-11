//write an algorithm that finds the sum of each element of the array and returns the average number
//inside that array.
const array = [1, 4, 6, 9, 12, 15, 18, 20, 35]//output: 13.33333333

var average = function(numArr){
    var sum = 0; //creates sum variable to hold on to each num's value in array
    //loop through each element 
    for (i=0; i < numArr.length; i++){
        //add each elements value to the next
        sum += numArr[i];
    }
    console.log(sum / numArr.length); 
}
average(array);//call the function and pass in the array variable from line 1