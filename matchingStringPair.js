// matching string pair is a whiteboarding challenge Jessamyn got from Modernize
//considered a 'classic' beginner js question:) 

//    Write a function that validates a string full of parenthesis, 
//    validating that each open parenthesis has a matching closed
//    parenthesis, and vice versa
//   Examples:
//	  Input: '()'
//	 Output: true
//	  Input: '((()())())'
//	 Output: true
//	  Input: '())('
//	 Output: false
//	  Input: '(()'
//	 Output: false
//	  Input: ')('
//	 Output: false
//	  Input: '())(()'
//	 Output: false




























// ---------------------- WARNING ANSWER DOWN BELOW --------------------------------  









let stringTest = '()()(())'; // returns true
// let stringTest = '()()(()))'; // returns false

matchingPair = (string) => {
    const open = '(';
    const stringArray = string.split('');
    console.log(stringArray);
    let count = 0;

    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i] === open) {
            count++;
            console.log('it\'s an open parenthasis --> ' + stringArray[i] + ' <-- so count is plus one ' + count)
        } else {
            count--;
            console.log('it\'s a closed parenthasis --> ' + stringArray[i] + ' <-- so count is minus one ' + count)
        }
        if (count < 0) {
            return false;
        }
    }
    if (count == 0) {
        console.log('it\'s a match!')
        return true;
    } else {
        console.log('sorry no match for you...')
        return false;
    }
}
console.log('is it a matching pair? ' + matchingPair(stringTest));