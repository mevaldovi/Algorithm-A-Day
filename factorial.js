//write code to create a function that returns the factorial of num
const test = 5; // output: 5! => 1 * 2 * 3 * 4* 5 => 120;
const factorialize = function(num){
    let fact = 1;
    for(i = num; i >= 1; i--){
        fact*=i;
        console.log(fact);
    }
}
factorialize(test);