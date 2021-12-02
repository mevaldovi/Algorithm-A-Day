// Write a function that takes in an absolute file path and simplifies it
const test = "home/var/./www/../html//sql";

function simplify_path(main_path) {
  var parts = main_path.split("/"),
    new_path = [],
    length = 0;
  for (var i = 0; i < parts.length; i++) {
    var part = parts[i];
    //if there's a ".com", ".org", or "..", exclude that portion from the array
    if (part === "." || part === "" || part === "..") {
      if (part === ".." && length > 0) {
        length--;
        console.log(length)
      }
      continue;
    }
    //each index in new_path array contains how many elements are in it so far.
    //if there are any periods or elipses, exclude them
    new_path[length++] = part;
    console.log(length);
  }
  if (length === 0) {
    //if there are no variables in the URL path, insert a forward-slash instead
    return "/";
  }
  var result = "";
  for (var i = 0; i < length; i++) {
    result += "/" + new_path[i];
  }
  return result;
}
console.log(simplify_path(test));
