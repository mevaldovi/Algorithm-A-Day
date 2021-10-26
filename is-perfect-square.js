//write code to create a function that accepts a number and returns true if the number is a 
//perfect square.
//else, return false. Do not use the Math.sqrt method

const test = 9; //true
const test2 = 13; //false

const isPerfectSquare = function(num){
    let i = 1;
    while (i * i <= num){
        if(i * i !== num){
            i++;
            continue;
        };
        return true;
    }
        return false;
    };
console.log(isPerfectSquare(test));
console.log(isPerfectSquare(test2));