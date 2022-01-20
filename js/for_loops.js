"use strict";

// function showMultiplicationTable(num) {
//     for (let i = 0; i < 11; i * num, i++) {
//         console.log(num + " times " + i + " is " + (num * i));
//     }
// }
//
// showMultiplicationTable(7);





// function tenRandomNumbers() {
//     for (let i = 0; i < 10; i++) {
//        let x = (Math.floor(Math.random(20) * 200));
//         if (x % 2 !== 0) {
//             console.log(x + " is odd");
//         } else  {
//             console.log(x + " is even");
//         }
//     }
// }
//
// tenRandomNumbers();

// for (let i = 100; i > 0; i -= 5) {
//     console.log(i)
// }

//below is my answer for the slope log exeercise, I didn't like it, but it's mine.

// for (let i = 1; i < 10; i++) {
//     if (i === 1) {
//         console.log(1);
//     }else if(i === 2) {
//         console.log(22);
//     }else if(i === 3) {
//         console.log(333);
//     }else if(i === 4) {
//         console.log(4444);
//     }else if(i === 5) {
//         console.log(55555);
//     }else if(i === 6) {
//         console.log(666666);
//     }else if(i === 7) {
//         console.log(7777777);
//     }else if(i === 8) {
//         console.log(88888888);
//     }else if(i === 9) {
//         console.log(999999999);
//     }
// }


//stole the below example from my soft engeineer friend

//Empty string to be appended to print on a single line.
var s = "";
//First for loop going 1 to 9
for (let i = 1; i < 10; i++){
    // console.log("this is i " + i)
    //Inner loop starting at i and decrementing to 0
    //This means i=1 will run once, i=2 will run twice, etc.
    for (let j = i; j > 0; j--){

        //Append our current outer loop iteration to the empty string.
        s += i
        // console.log("this is j " + j )
        // console.log("this is s " + s)
    }
    //Log the entire completed string
    console.log(s)
    //Reset the string for next iteration
    s = "";
}


let str = ""
// console.log("UwU" + 1 + 1);

