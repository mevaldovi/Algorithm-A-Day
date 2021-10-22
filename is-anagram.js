// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false
const test1 = 'listen';
const test2 = 'silent';
const test3 = 'dog';
const test4 = 'cat';

var isAnagram = function(strA, strB) {
    const anag1 = strA.split('').sort().join();
    const anag2 = strB.split('').sort().join();
    
    if (anag1 === anag2){
        console.log('true')
    } else {
        console.log('false');
    }
};

isAnagram(test1, test2);