// Write code to create a function that accepts two strings
// Return true if the second string is a substring of any permutation of the first string
// Else return false

const string = "d ab";//[a,b,d]
const subString = "zyxte";//[z,y,x]

var permutationSubstring = function(str, sub) {
    let n1 = str.length;
    let n2 = sub.length;

    if (n1 != n2){
        console.log("false")
    }

    let ch1 = str.split(' ').sort();//[abd]
    let ch2 = sub.split(' ').sort();//[etxyz]

    for(i=0; i< n1; i++){
        if (ch1[i] === ch2[i]){
            console.log("true")
        } else {
            console.log("false")
        }
    }
    
};
permutationSubstring(subString, string);