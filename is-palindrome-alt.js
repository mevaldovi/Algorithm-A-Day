const isitapalindrome = "sally";

var isPalindrome = function(str){
    for (i=0; i < str.length; i++){
        console.log(str[i])//print each character index in the string
        if (str[i] !== str[str.length - (i + 1)]){
            console.log("false")
        } else {
            console.log("true")
        }
    }
}
isPalindrome(isitapalindrome)