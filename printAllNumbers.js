// print all numbers is an easy js algorithm challenge from UT bootcamp:

// Write code to print all numbers from 1 to `num`
// Assume `num` will be a positive number

const number = 1000;

const logAllNums = function(num){
    for (i=0; i < num; i++){
        if (i < num){
            console.log(i)
        } else {
            console.log("oops! too far")
        }
    }
}
logAllNums(number);






















// ---------------------- WARNING ANSWER DOWN BELOW --------------------------------  







// let testNumber = 27;

// var logNums = function(celia) {
//     for (let i = 1; i < celia; i++) {
//         console.log(i)
//     }
// };

// logNums(testNumber)