//write a function that takes in a string and outputs the first
// occurence of a character that does NOT repeat itself in the string
const alphaString = "aabbccddeffgghh"; //ouput: "e"
//check for unique character
function checkForUnique(str) {
  var count = 0; //create count variable
  //for loop through split string
  for (let i = 0; i < str.length; i++) {
    const element = str[i]; //targets each element
    if (count[str[i]] == 1) {//if an element does not repeat twice
      count++;
      console.log("this character  " + str[i] + "  is unique");
    }
  }
}
checkForUnique(alphaString);
