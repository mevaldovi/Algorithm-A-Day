//Microsoft algo question
const array = [0,2,147,483,647]


function solution(N) {
    let test = N.join().split(',')//output: ["0","2", "147", "483", "647"]
    console.log(test)
    let largest = test.toString();
    console.log(largest)

    for(i=0; i < largest.length; i++){
        let element = +largest[i]
        
        // console.log(element)
    //     if (element[i] >= element[i+1]){
    //         console.log(i)
    // }
}
}
solution(array);

//output: ["0","2", "147", "483", "647"]
        //i[0]  i[1] i[2],   i[3]   i[4]

//["0", "2", "1", "4", "7", "4", "8", "3", "6", "4", "7"]


  
