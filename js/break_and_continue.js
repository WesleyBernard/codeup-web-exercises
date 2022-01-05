"use strict";
do{
    var numToSkip = parseInt(prompt("PLease enter a number between 1 and 50"));
    if ((numToSkip) > 1 && (numToSkip) < 50){
        break;
    }
} while (((numToSkip) <= 1 || (numToSkip) >= 50) || numToSkip)
for (let i = 0; i < 50; i++) {
    if (i === parseInt(numToSkip)) {
        console.log("yikes skipping number: " + i);
        continue;
    }
    if (i % 2 !== 0){
    console.log(`here is an odd number ${i}`)
    }
}
// console.log(isNaN("UwU") === true)

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

