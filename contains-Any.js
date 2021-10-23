
function containsAny(source,target)
{
    var result = source.filter(function(item){ 
    return target.indexOf(item) > -1
  });   
    return (result.length > 0);  
}    

//results


var fruits = ["apple","banana","orange"];

console.log(containsAny(fruits,["apple","grape"]));//true
console.log(containsAny(fruits,["apple","banana","pineapple"]));//true
console.log(containsAny(fruits,["grape", "pineapple"]));//false