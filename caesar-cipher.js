// Write a function that takes in a string and and an offset and 
//returns a new string with each character moved by the offset
const string = "hello world";
const alphabet = "abcdefghijklmnopqrstuvwxyz"

var caesarCipher = function(str, offset) {
    let sortedA = alphabet.split().sort(function(a,b){return a - b});
    let sortedS = string.split().sort(function(a,b){return a - b});
    let decipher = [];
    
    for (i=0; i < sortedS.length; i++){
        for(j=0; j < sortedA.length; j++){
            if (sortedS[i] = sortedA[j]){
                decipher.push(sortedA[j]+ offset)
                console.log(decipher)
            }

        }
        }
        
        
       
    
    }
caesarCipher(string, 1);