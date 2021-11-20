// Write a function that takes in a string and and an offset and
//returns a new string with each character moved by the offset
var str1 = "GeeksforGeeks";
var str2 = "hellomynameisMarie";

function leftrotate(str, d) {//takes in a string and a d, representing the number of units to shift
  var ans = str.substring(d, str.length) + str.substring(0, d);//
  return ans;
}

// Function that rotates s towards right by d
function rightrotate(str, d) {
  return leftrotate(str, str.length - d);
}


console.log(leftrotate(str1, 2));
console.log(rightrotate(str2, 2));

//key to solving this algo: utilize substring() method
