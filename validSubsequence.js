//  valid subsequence challenge from algoexpert.com























// ---------------------- WARNING ANSWER DOWN BELOW --------------------------------  









// function isValidSubsequence(array, sequence) {
//     // Write your code here.
//     let j = 0;

//     for (let i = 0; i < array.length; i++) {

//         // you would wait for array[i] = sequence[j] and then move to next value		

//         if (array[i] === sequence[j]) {
//             j++;
//         }
//     }
//     if (j === sequence.length) {
//         return true;
//     } else {
//         return false;
//     }
// }