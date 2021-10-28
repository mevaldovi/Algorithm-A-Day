// Write code to create a function that accepts a string containing only 0s and 1s
// Return true if there are an equal number of 0s and 1s
// Else return false
const string = "010101"; //true
const string2 = "01010"; //false
let countFor0 = 0;
let countFor1 = 0;

var zeroesAndOnes = function(str) {
    let splitA = string.split('');//[0, 1, 0, 1, 0, 1]
    let splitB = string2.split('');

    for (i=0; i<str.length; i++){
        if (str[i] = "0"){
            countFor0++;
        } else if (str[i] = "1"){
            countFor1++;
        }

        if (countFor0 === countFor1){
            console.log("true")
        } else {
            console.log("false")
        }
    }   
};
zeroesAndOnes(string);
