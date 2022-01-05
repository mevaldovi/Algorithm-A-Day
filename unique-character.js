//write a function that takes in a string and outputs the first
// occurence of a character that does NOT repeat itself in the string
const alphaString = "aabbccddeffgghh"; //ouput: "e"
const introString = "hello my name is Marie and I am twenty-three years old"//output: "w"
//check for unique character
function checkForUnique(str) {
  var charCount = {}; //create count variable; object to take in each character & keep track of how often it occurs
  //loop through entre string
  for (let i = 0; i < str.length; i++) {
    var char = str[i];//stores each element in the string
    if (charCount[char]){//if any characters exist
      charCount[char]++;//keep looping through and add all characters to object for storage
    } else {
      charCount[char] = 1;//else assume there's only one character in the string
    }
  }
  //loop through targeting each individual character in charCount
  for(var j in charCount){
    //if any character occurs only once
    if(charCount[j]==1){
      //log it to the console
      console.log(j);
    }
  }
}
checkForUnique(introString);



    