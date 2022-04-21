// Write code to create a function that accepts a string and returns the string in camelCase
const stringtoCamelCase = "text That I WaNt to make cAMEL case";
const makeCamelCase = (str) => {
    let substringChange =
    str
    .split(" ")//split at each space between each word
    .map((e, i) => //create a new array with the reflective changes from toUpperCase && toLowerCase methods
      i ? e.charAt(0).toUpperCase() + e.slice(1).toLowerCase() : e.toLowerCase()
      //translation: if a character exists at its index position, take the first character at index[0]
      //and concat that to the rest of the substring  that is lowercase; otherwise, leave lowercase
    )
    .join("");//join each word back together
    console.log(substringChange)
}
makeCamelCase(stringtoCamelCase);
// map() creates a NEW array from calling a function (or in this case, a method) for every array element.

// map() calls a function once for each element in an array.

// map() does NOT change the original array.
