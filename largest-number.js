//Microsoft algo question
const array = [0,2,147,483,647]

function solution(N) {
    let test = N.join().split(',')//output: ["0","2", "147", "483", "647"]
    console.log(test)
    let largest = test.toString();
    console.log(largest)


    for(i=0; i < largest.length; i++){
        let element = +largest[i]
        console.log(element)
        if (element[i] >= element[i+1]){
            console.log(i)
    }
}
}
solution(array);


  
