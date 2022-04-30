// **ACTUAL ALGO PROBLEM FROM MY TECHNICAL INTERVIEW WITH RAVEBIZZ**

//write a function that checks if two provided strings are anagrams of each other;
//letter casing shouldn’t matter. Also, consider only characters, not spaces or punctuation. For example
//function('finder', 'Friend')  --> true
//function('hello', 'bye') --> false -------------**

/* Driver Code*/
let thing1 = ["t", "e", "s", "t"];
let thing2 = ["t", "t", "e", "w"];

function isAnagram(str1, str2) {
  // Get lengths of both strings
  let n1 = str1.length;
  let n2 = str2.length;

  // If length of both strings is not same,
  // then they cannot be an anagram
  if (n1 != n2) {
    console.log("false");
  }
  // Sort both strings
  str1.sort();
  //note to self: sort is a string method first and foremost
  str2.sort();

  let anagramCount = 0;
  let isAnAnagram = true;
  // Compare sorted strings
  for (let i = 0; i < n1; i++) {
    console.log(str1[i], str2[i]);
    //if each character in str1 does NOT match that of str2, log "false"
    if (str1[i] !== str2[i]) {
      isAnAnagram = false;
      console.log("false");
    } else {
      isAnAnagram;
      anagramCount += 1;
      console.log("true");
    }
    console.log(
      `isAnAnagram??${isAnAnagram}!str1 ${str1} and str2 ${str2} have ${anagramCount} matching characters`
    );
  }
}
// Function Call
isAnagram(thing1, thing2);
