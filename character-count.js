// Write code to create a function that accepts a string and 
//returns an object containing the number of times each character appears in the string

const testString = "character";
let results = "";//should output c = 1, h = 1, a = 2, and so on

var characterCount = function(str) {
    const splitString = testString.split('');
    console.log(splitString);
    for (i=0; i < str.length; i++){
        let characterCount = str[i]
        let count = 0;

        results += characterCount//adding characterCount repping how many times a letter occurs, and stores it inside results variable
        for (j=0; j < str.length; j++){
            if (characterCount[j] === )
        }

    }
};
