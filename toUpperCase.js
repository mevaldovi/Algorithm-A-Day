// Write code to create a function takes a string and returns a
// new string with the fIRST letters of each word capitalized
const string = "a man a plan a canal panama";
const string2 = "hello";

const upperCase = function (str) {
  const splitStr = str.split(" ");
  console.log(splitStr);

  const array = [];

  for (i = 0; i < splitStr.length; i++) {
    //['a', 'man', 'a', 'plan', 'a', 'canal', 'panama']
    let word = splitStr[i];
    word[0] = word[0].toUpperCase(); //converting first character of each word to uppercase letter
    console.log(word[0].toUpperCase());

    const splitWord = word.split("");
    console.log(splitWord);

    splitWord[0] = splitWord[0].toUpperCase();
    console.log(splitWord[0].toUpperCase());

    splitWord.splice(0, 1, splitWord[0].toUpperCase());
    console.log(splitWord.join(""));

    array.push(splitWord.join(""));
    console.log(array);
  }
  console.log(array.join(" "));
};
upperCase(string);
