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
