// FIZZBUZZ is a classic beginner js whiteboarding challenge:
console.log("hello world");
// print all numbers from 1 to `num`
// Assume `num` will be a positive number
const numTest = 15;

function fizzbuzz(num){
    for (i=0; i<=num; i++){
        if ((i % 3 === 0) && (i % 5 === 0)){
            console.log('fizzbuzz  ! ' + i)
        } else if(i % 3 === 0){
            console.log('fizz  ' + i);
        } else if (i % 5 === 0){
            console.log('buzz  ' + i)
        } else {
            console.log(i);
        }
    } 
}
fizzbuzz(numTest); 
// IF the number is divisible by 3 with no remainder print 'fizz'
// IF the number is divisible by 5 with no remainder print 'buzz '
// IF the number is divisible by 3 AND 5 with no remainder print 'fizzbuzz
// example input: 15
// example output in console:
// 1
// 2
// 3 fizz
// 4
// 5 buzz
// 6 fizz
// 7
// 8
// 9 fizz
// 10 buzz
// 11
// 12 fizz
// 13
// 14
// 15 fizzbuzz

























// ---------------------- WARNING ANSWER DOWN BELOW --------------------------------  













// let testNumber = 30;

// var logNums = function(num) {
//     for (let i = 1; i < num + 1; i++) {
//         if ((i % 3 === 0) && (i % 5 === 0)) {
//             console.log(i + ' fizzbuzz');
//         } else if (i % 5 === 0) {
//             console.log(i + ' buzz');
//         } else if (i % 3 === 0) {
//             console.log(i + ' fizz')
//         } else {
//             console.log(i);
//         }
//     }
// };

// logNums(testNumber)