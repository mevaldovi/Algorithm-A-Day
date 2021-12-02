//
const redShirtSpeeds = [5, 5, 3, 9, 2];
const blueShirtSpeeds = [3, 6, 7, 2, 1];
let maxSpeed = 0;
const fastest = true;

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest){
    let sortedRed = redShirtSpeeds.sort();
    let sortedBlue = blueShirtSpeeds.sort().reverse();

    //sortedBlue = [7, 6, 3, 2, 1]
    //sortedRed = [2, 3, 5, 5, 9]

    for(i=0; i < sortedBlue.length; i++){
        for(j=0; j < sortedRed.length; j++){
            if(sortedBlue[i] > sortedRed[j]){
                maxSpeed = sortedBlue[i++];
            }
            else if(sortedRed[j] > sortedBlue[i]){
                maxSpeed = sortedRed[j++]
            }
            console.log(maxSpeed)

        }

    }
}
tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest);
