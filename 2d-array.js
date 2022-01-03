// Write code to create a function that accepts a two-dimensional array
// Each 2D element contains either the string "X" or "O" (both capitalized)
// Return the number of times "X" appears in the 2D array

const string = "XO OXX XXOX";//output: 6

const arraySearchForX = function(arr) {
    const splitArr = arr.split(' ');//we're turning string into an array
    console.log(splitArr);
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        const arrIndex = arr[i];
        console.log(arr[i]);//details: see printing of each element in string
        
        if(arrIndex.includes("X")){
            count++;
            console.log("Number of X's:" + count)     
        } else if (!"X"){
            console.log("nothing to see here");
        } 
    }
};
arraySearchForX(string);