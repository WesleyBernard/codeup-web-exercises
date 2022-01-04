"use strict";

// let i = 1

// while (i < 65536) {
//     console.log(i * 2);
//     i *= 2

// }

var allCones = Math.floor(Math.random() * 50) + 50;

do {
    
    let conesSold = Math.floor(Math.random() * 5) + 1;
    if(conesSold > allCones) {
        console.log("We can't do that, king. Don't got " + conesSold + " cones left");
        continue;
    }
    allCones -= conesSold;
    
    console.log("We just sold " + conesSold + " cones!");
    if (allCones === 0) {
        console.log("cool, we can head home");
        return;
    }
    console.log("only " + allCones + " left to go!");    
    

} while (allCones > 0);