//write a function that takes in a string and outputs the first
// occurence of a character that does NOT repeat itself in the string
const alphaString = "aabbccddeffgghh"; //ouput: "e"
//check for unique character
function checkForUnique(str) {
  var count = 0; //create count variable
  const splitAlphaStr = str.split(" "); //split each character into array element
  //for loop through split string
  for (let i = 0; i < str.length; i++) {
    const element = str[i]; //targets each element
    if (splitAlphaStr[i] !== str[i]) {
      count++;
    }
  }
  console.log("this character  " + count + "  is unique");
}
checkForUnique(alphaString);
