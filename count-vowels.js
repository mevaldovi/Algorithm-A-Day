function countVowels(str) {
  let count = 0;
  var input = str.toLowerCase();
  let vowelArr = ["a", "e", "i", "o", "u"];

  for (i = 0; i < input.length; i++) {
    if (vowelArr.includes(input[i])) {
      //note includes is an input method only
      count++;
    }
  }
  console.log(count);
}
countVowels("Hello my name is Marie");

//without using includes() method:

function countVowels(str) {
  let count = 0;
  var input = str.toLowerCase();
  for (i = 0; i < input.length; i++) {
    if (
      input[i] === "a" ||
      input[i] === "e" ||
      input[i] === "o" ||
      input[i] === "i" ||
      input[i] === "u"
    ) {
      count++;
    }
  }
  console.log(count);
}
countVowels("Hello my name is David");
