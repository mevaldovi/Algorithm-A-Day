const redShirtHeights = [5, 8, 1, 3, 4];
const blueShirtHeights = [6, 9, 2, 4, 5];

function classPhotos(redShirtHeights, blueShirtHeights) {
  const shirtColorFirstRow =
    redShirtHeights[0] < blueShirtHeights[0] ? "RED" : "BLUE";
  let sortRed = redShirtHeights.sort().reverse();
  let sortBlue = blueShirtHeights.sort().reverse();

  for(i=0; i < sortRed.length; i++){
      const redShirtHeight = sortRed[i];
      const blueShirtHeight = sortBlue[i];

      if(shirtColorFirstRow === "RED"){
          if(redShirtHeight >= blueShirtHeight){
              console.log("false")
          } else {
              console.log("true")
          }
      }
  }

}

classPhotos(redShirtHeights, blueShirtHeights);
