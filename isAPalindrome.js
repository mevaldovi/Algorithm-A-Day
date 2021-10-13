//write code that returns true is str is a Palindrome, and false if the str is not a Palindrome.

const test = 'civic';//true
const test1 = 'hello';//false
const test2 = 'marie';//false
const test3 = 'racecar';//true

const palindrome = (str) => {
    const split = str.split('');
    // const join1 = split.join('');
    const reversed = split.reverse('');
    const join2 = reversed.join('');

    // if (split === reversed){
    //     console.log('true');
    // }

    if (str === join2){
        console.log('true');
        return true;
    } else {
        console.log('false');
        return false;
    }
}
palindrome(test1);
