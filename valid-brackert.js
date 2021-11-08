// Write a function to take a string and return true if 
//it contains valid sets of matching brackets, else return false

const string = "{{{}}}}"//return false
const string2 = "{{{}}}"//return true

let opened = "{"
let closed = "}"
let openCount = 0;
let closedCount = 0;

var validBrackets = function(str) {
    for (let i= 0; i< str.length; i++) {
        let splitString = str.split('');
        const el = str[i];
        if (el.includes(opened)){
            openCount++;
        } else if (el.includes(closed)){
            closedCount++;
        }
        if (openCount === closedCount){
            console.log("Hooray its a match!!")
        } else {
            console.log("not a match")
        }
        
        
    }
};
validBrackets(string2);