const string1 = "Hello World"
const string2 = "World Hello"
const string3 = "Goodbye"

var concertFlyer = function (str1, str2){
    str1 = string1.split(' ').sort().join();
    console.log(str1);

    str2 = string2.split(' ').sort().join();
    console.log(str2);

    if(str1 === string3){
        console.log("true")
    } else {
        console.log("false")
    }

}
concertFlyer(string1, string3)