// Write a function that takes in an integer and returns it as a Roman numeral string
const int = 10; //output: "X"
const int2 = 25;//output: "XXV"

function romanize(num) {
  var lookup = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    },
    roman = "", i;//give roman value of an empty string equal to the index element
    

  for (i in lookup) { //for each index in the lookup object
    while (num >= lookup[i]) {
      roman += i;//assign the number as a string
      num -= lookup[i];//stops the while loop & prevents infinity looping
      console.log(i)
    }
  }
  console.log(roman);
}
romanize(int);
