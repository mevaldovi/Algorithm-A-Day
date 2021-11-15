const array1 = [0, 2, 5, 7, 9];
const array2 = [0.2, 4, 10, 11, 13]; //output: 0, 0.2 (smallest difference)

function findPair(arr1, arr2) {
  let m = arr1.length - 1;
  let n = arr2.length - 1;
  let i = 0;
  let j = 0;
  let result = Number.MAX_VALUE;
  let a, b;

  while (i < m && j < n) {
    if (Math.abs(arr1[i] - arr2[j]) < result) {
      result = Math.abs(arr1[i] - arr2[j]);
      a = arr1[i];
      b = arr2[j];
      /* absolute difference cannot be less than 0 */
    }
    if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }
  console.log("The pair with minimum absolute difference is " + a + "," + b);
}
findPair(array1, array2);
