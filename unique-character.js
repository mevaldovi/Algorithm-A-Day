//write a function that takes in a string and outputs the first
// occurence of a character that does NOT repeat itself in the string
const alphaString = "aabbccddeffgghh"//ouput: "e" 
//check for unique character 
function checkForUnique(str){
    const splitAlphaStr = str.split(" "); //split each character into array element
    //for loop through split string
    for (let i = 0; i < splitAlphaStr.length; i++) {
        const element = str[i]; //targets each element
        if(splitAlphaStr[i] !== element){
            console.log("this character  " + splitAlphaStr[i] + "  is unique")
        }
    }
}
checkForUnique(alphaString)