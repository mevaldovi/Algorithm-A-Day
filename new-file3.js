// **ACTUAL ALGO PROBLEM FROM MY TECHNICAL INTERVIEW WITH RAVEBIZZ**

//Write a program which iterates the integers from 1 to 100.
//For multiples of three print "Fizz" instead of the number and print "Buzz" for the multiples of five.
//When number is divided by both three and five, print "fizz buzz"

//Loop through all integers between 1 and 100
for (i = 0; 0 < i < 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizz buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  }
}
