//write code to create a function that accepts an array of numbers
//return 'true' if each number in its own individual array is unique, else return 'false'

const testArr = [1, 2, 3, 4, 5, 6]; //returns true

const unique = async (arr) => {
  const findUnique = await arr.filter((data, j) => {
    for (i = 0; i < arr.length; i++) {
      if (data === arr[i] && i !== j) {
        return data;
      } else {
        console.log("false");
      }
    }
  });
  let isUnique = findUnique.length > 0 ? false : true;
  return isUnique;
};
let test = unique(testArr);
console.log(test); 
