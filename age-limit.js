//write an algorithm that takes in an array of ages and returns only the age numbers over 18.
const ageArray = [2, 15, 30, 50, 78, 100];
const result = ageArray.filter(checkAge);
//making a new array of ageArray reflecting accurate calculations of age

function checkAge(age){
    console.log(age >= 18)
}
checkAge(result)

// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does NOT change the original array.