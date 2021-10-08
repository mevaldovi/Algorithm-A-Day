// Write code to return the the number of vowels in `str`
const vowel = "aberacadabra"; //expected return: 6


vowelCount = (l) => {
  //convert the string to an array
  const letterArray = l.split("");
  // letterArray = ["a", "b", "e", "r", "a", "c", "a", "d","a", "b", "r", "a"]
  const vowelList = ["a", "e", "i", "o", "u"];
  //keep track of number of vowels
  let count = 0;
  //loop through the array
  
    for (i = 0; i < letterArray.length; i++) {
      if (vowelList.includes(letterArray[i])) {
        count++;
      }
    }
    return console.log(" " + l + " has " + count + " vowels");
};

vowelCount(vowel);
