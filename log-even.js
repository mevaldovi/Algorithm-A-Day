console.log('CODE EVERYDAY!🦄 👩🏼‍💻 🌈');

// sandbox to do new challenges in and and use with sandbox.html
// to test in the browser console.log
// when you get it right, create a new js file and paste in there!
// Write code to print aALL even numbers from 0 to `num`
// Assume `num` will be a positive number

const numTest = 12;

const logEvenNums = function(num) {
    for (i=0; i<=num; i++){
        if (i % 2 === 0){
            console.log("even " + i);
        } else if (i % 2 !== 0) {
            console.log("odd " + i);
        } else {
            console.log(i);
        }
    }  
};
logEvenNums(numTest);