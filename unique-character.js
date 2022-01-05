//write a function that takes in a string and outputs the first
// occurence of a character that does NOT repeat itself in the string
const alphaString = "aabbccddeffgghh"; //ouput: "e"
//check for unique character
function checkForUnique(str) {
  var count = {}; //create count variable; object to take in each character & keep track of how often it occurs
  var char = str[i];//stores each element in the string
  //loop through entre string
  for (let i = 0; i < str.length; i++) {
    if (charCount[char]){
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  for(var j in charCount){
    if(charCount[j]==1){
      return j;
    }
  }
}


    