// Write code to create a function that accepts a string and
//returns an object containing the number of times each character appears in the string

const testString = "character";

var characterCount = function (str) {
  if (str.length == 0) { // if there is no string, throw error
    console.log("Invalid string");
    return;
  }
  //for loop to iterate over string
  for (let i = 0; i < str.length; i++) {
    //variable counting occurrence
    let count = 0; //output c = 1, h = 1, a = 2, and so on

    for (let j = 0; j < str.length; j++) {//loop through it again
      if (str[i] == str[j] && i > j) {//if one of the strings is longer than the other,
        // and you need to loop through more than once, exit.
        break;
      }
      if (str[i] == str[j]) {//if the two strings are the same length, add to count.
        count++;
      }
    }
    if (count > 0) {
      console.log(`${str[i]} occurs ${count} times`);
    }
  }
};
characterCount(testString);
