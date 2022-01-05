"use strict";
do{
    var numToSkip = prompt("PLease enter a number between 1 and 50");
    if (parseInt(numToSkip) > 1 && parseInt(numToSkip) < 50){
        break;
    }
} while (parseInt(numToSkip) <= 1 || parseInt(numToSkip) >= 50);
for (let i = 0; i < 50; i++) {
    if (i === parseInt(numToSkip)) {
        console.log("yikes skipping number: " + i);
        continue;
    }
    if (i % 2 !== 0){
    console.log(`here is an odd number ${i}`)
    }
}
//these below codes I wrote while helpin someone study so ignore them, I may take them out.
//****************************************************************************************** */

// function not(input) {
//     return !input
// }

// console.log(not(false));

// function addOne(x) {
//     return parseFloat(x) + 1;
// }

// console.log(addOne(Infinity));

//********************************************************************************************* */

