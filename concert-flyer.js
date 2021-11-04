const string1 = "Hello World"
const string2 = "World Hello"
const string3 = "Goodbye"

var concertFlyer = function (str1, str2, str3){
    split1 = string1.split(' ').sort().join();
    console.log(str1);

    split2 = string2.split(' ').sort().join();
    console.log(str2);

    split3 = string3.split(' ').sort().join();
    console.log(split3);

    if(split1 === split2){
        console.log("its a match")
    } else {
        console.log("not a match")
    }

    if(split1 === split3){
        console.log("its a match")
    } else {
        console.log("not a match")
    }

    if(split2 === split3){
        console.log("its a match")
    } else {
        console.log("not a match")
    }

}
concertFlyer(string1, string3)