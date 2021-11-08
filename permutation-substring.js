// Write code to create a function that accepts two strings
// Return true if the second string is a substring of any permutation of the first string
// Else return false
const string = "d, a, b"//[a,b,d]
const subString = "b, a, d"//[a,b,d]

var permutationSubstring = function(str, sub) {
    let n1 = str.length;
    let n2 = sub.length;

    if (n1 != n2){
        console.log("false")
    }

    let ch1 = str.split(' ').sort();
    let ch2 = sub.split(' ').sort();

    for(i=0; i< n1; i++){
        if (ch1[i] != ch2[i]){
            console.log(ch1[i]);
            console.log("false")
        } else {
            console.log("true")
        }
    }
    
};
permutationSubstring(subString, string);