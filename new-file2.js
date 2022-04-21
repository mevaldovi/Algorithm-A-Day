// **ACTUAL ALGO PROBLEM FROM MY TECHNICAL INTERVIEW WITH RAVEBIZZ**

//write a function that checks if two provided strings are anagrams of each other; 
//letter casing shouldn’t matter. Also, consider only characters, 
//not spaces or punctuation. For example
//function('finder', 'Friend')  --> trued
//function('hello', 'bye') --> false -------------**

const string1 = "finder, Friend";
const string2 = "finder";

const result = string1.filter(checkforAnagram);
const result2 = string2.filter(checkforAnagram);

function checkforAnagram (str1, str2){
    if (str1[i] === str2[i]){
        //check to see if each character of str1 matches that of str2
        console.log("it's an anagram");
    } else {
        console.log("no anagram here");
    }   
}
result(string1, string2);
