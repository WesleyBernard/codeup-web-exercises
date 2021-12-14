"use strict";

// function analyzeColor(color) {
//     if (color === "red") {
//         console.log("red is a firey color");
//     }else if (color === "blue") {
//         console.log("blue is a sad color");
//     } else {
//         console.log("I dunno much about that color");
//     }
// }
//
//
// console.log(analyzeColor("green"));
//
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
//
// console.log(randomColor);
//
// console.log(analyzeColor(randomColor));


// let color = prompt("What is your favorite color?");
//
// switch(color) {
//     case "red":
//         alert("red is a firey color");
//         break;
//     case "blue":
//      alert("blue is a sad color");
//         break;
//     default:
//         alert("I dunno much about that color");
// }


// function calculateTotal(x,y) {
//     if (x === 0) {
//         return y;
//     } else if (x === 1) {
//         return  y - .10 * y;
//     } else if (x === 2) {
//         return y - .25 * y;
//     } else if (x === 3) {
//         return y - .35 * y;
//     } else if (x === 4) {
//         return y - .50 * y;
//     } else if (x === 5) {
//         return 0;
//     } else if (x === 0) {
//         return y
//     }
// }
//
// console.log(calculateTotal(3,100));

// var luckyNumber = Math.floor(Math.random() * 6);
//
// let y = parseInt(prompt("What was your total?"));
//
// function calculateTotal(luckyNumber,y) {
//     if (luckyNumber === 0) {
//         return y;
//     } else if (luckyNumber === 1) {
//         return  y - .10 * y;
//     } else if (luckyNumber === 2) {
//         return y - .25 * y;
//     } else if (luckyNumber === 3) {
//         return y - .35 * y;
//     } else if (luckyNumber === 4) {
//         return y - .50 * y;
//     } else if (luckyNumber === 5) {
//         return 0;
//     } else if (luckyNumber === 0) {
//         return y
//     }
// }
//
// console.log(calculateTotal(luckyNumber, y));
//
// alert("Your lucky number was " + luckyNumber + ", Your total was " + y + ", your amount to pay is " + (calculateTotal(luckyNumber, y)));
//
// alert("UwU");

// let want = confirm("Would you like to enter a number?");
//
// if (want) {
//     let num = parseFloat(prompt("Enter a number"));
//     if (num % 2 === 0) {
//         alert(num + " is an even number");
//     } else {
//         alert(num + " is an odd number");
//     }
//     alert("That number plus 100 is " + (num+100));
//
//     if (Math.sign(num) === +1) {
//         alert(num + " is a positive number");
//     }
//     else if (Math.sign(num) === -1) {
//         alert(num + " is a negative number");
//     }
//     else if (Math.sign(num) === +0) {
//         alert("You entered 0");
//     }
//     else if (Math.sign(num) === -0) {
//         alert("You entered -0");
//     }
// }
// Create a file named conditionals.js inside the js directory.
//     Create a function called analyzeColor1 that takes a parameter called color
// In your function, use ONLY if statements to print the following:
//     “blue is the color of the sky” if the value of color is “blue”
// “red is the color of love” if the value of color is “red”
// “green is the color of envy” if the value of color is “green”
// “I don’t know that color” if the value of color is anything else
// HINT: use return in the conditional code blocks to prevent from printing multiple times for the same argument

// function analyzeColor1(color) {
//     if (color === "red") {
//         return "red is the color of love";
//     } if (color === "blue") {
//         return "blue is the color of the sky";
//     } if (color === "green") {
//         return "green is the color of envy";
//     } return "I don't know much about that color";
// }
//
// console.log(analyzeColor1("red"));
// console.log(analyzeColor1("blue"));
// console.log(analyzeColor1("green"));
// console.log(analyzeColor1("yellow"));

// function analyzeColor1(color) {
//     if (color === "blue") {
//         return "blue is the color of the sky";
//     } if (color === "red") {
//         return "red is the color of love";
//     } if (color === "green") {
//         return "green is the color of envy"}
// }
//
// console.log(analyzeColor1("red"));
// console.log(analyzeColor1("blue"));
// console.log(analyzeColor1("green"));

// here is a conditionals project for those who are done with the exercises:
//     Create a file named analyze_input.js in the js directory.
//     In that file, write a program that receives user input and analyzes the input differently
//     if the input is a number or a string. If the input is a string, it will analyze the string differently
//     if it is length 1.
// Following are the rules of analysis:
//     If the input is a number:
//     Output if the number is odd or even (zero is considered even).
//     Use your function from Exercise 2 for this functionality.
//     Output if the number is negative, positive, or zero
// If the input is a string:
//     If the string’s length is 1, output if the string (or char) is a vowel or not
// Otherwise, output the length of the string
// Design your program to include a switch and at least one if/else.
// You must also make separate functions for all of the following program functionality:
//     Determining if the input is a number, string, or otherwise. This function should be called analyzeInput
//     Determining if a number is odd or even. Re-use your Exercise 2 function for this.
//                    Determining if a number is <, >, or equal to zero
//     Determining if the string is a single character or not
//     Determining if the length 1 string is a vowel or not
//     Add, commit, and push to GitHub.



let input = prompt("Enter a string or a number");

function analyzeInput(input) {
    if (!isNaN(parseFloat(input))) {
        console.log( input + " is a number");
    }else if (isNaN(parseFloat(input))) {
        console.log(input + " is a string");
    }else {
        console.log("Neither a string or a number");
    }

}

analyzeInput(input);

function evenOrOdd(input) {
    if (isNaN(parseFloat(input))) {
        console.log("Strings aren't even or odd");
    }
    else if (parseFloat(input) % 2 === 0) {
        console.log(input + " is an even number");
    } else if (parseFloat(input) !== 0) {
        console.log(input + " is an odd number");
    } else {
}}

evenOrOdd(input);

// console.log(isNaN())

