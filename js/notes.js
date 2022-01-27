'use strict';

//--NUMBERS (INTRO)
//I hope it's cool for me to take my notes in here
//anyway, expressions in js will follow order of operations just like we did in middle school, (PEMDAS)

//console.log(Math.PI);

// let exp = (10 * 2 / 5) - 2**2
//
// console.log(exp);
//
// // This will bring back
// //
// // 10 x 2
// // then 20 / 4
// // then 2 ** 2, 2 to the second power
// // then 4 - 4

// Fun fact 1/0 is infinity and 0/1 is 0 (I think)

// -Binary operator require two operands in order to evaluate
// add, subtract, blah blah, here are the ones you might forget, but willneed
// % modulus
// **exponent
// That's it for now

// We also have unary operators
// + - plus
// - - negate
// ++ - increment
// -- - decrement

// All of these are falsey
// nan
// null
// undefined
// 0 and -0
// ""

// console.log(NaN === NaN);

//
// console.log(isNaN("UwU"));

// TODO: MINI EXERCISE
//      Write a function which uses a for-loop and
//      -> accepts the number of times to iterate as a parameter
//      -> only logs *if the iteration number is odd*

// function oddIterations(num) {
//     for (i = 0; i < num; i++) {
//         if (i % 2 !== 0) {
//             console.log(i);
//         }
//     }
// }
//
// oddIterations(29);

// TODO: MINI EXERCISE
//      Write a function which uses a for-loop and
//      -> accepts the number of times to iterate as a parameter
//      -> logs "This is an even iteration" on the evens
//      -> logs "This is an odd iteration" on the odds

// function labeledIterations(num) {
//     for(i = 0; i < num; i++) {
//         if (i % 2 !== 0) {
//             console.log(i + " is an odd number.");
//         } else{
//             console.log(i + " is an even number.");
//         }
//     }
// }
//
// labeledIterations(30);

// TODO: MINI EXERCISE
//      Make a new version of your getPassword function using a for-loop!
//      -> The purpose of the for-loop is to only allow a maximum number of attempts
//          -> If the max attempt used unsuccessfully, alert the user of such and RETURN or BREAK
//      -> Once the user enters the correct password, use the 'break' keyword to end the loop
//      -> After the loop concludes, alert the use they have entered the correct password

// var answer = "helloworld"
// function getPassword() {
//     for(let i = 0; i < 3; i++) {
//         let password = prompt("Please enter the password");
//         if (password === answer) {
//             alert("correct password");
//             break;
//         }else if(i === 1) {
//             alert("You only have one mnore attempt");
//         } else if (i === 2) {
//             alert("Too many incorrect attemmpts, see ya.");
//         }
//     }
// }
//
// getPassword();

// console.log(isNaN("UwU"));
//
// function roll(rolled) {
//     const [timesToRoll, sizeOfDice] = rolled.split('d');
//     const rolledArray = [];
//     let rollTotal = 0;
//     for (let i = 0; i < timesToRoll; i++) {
//         const diceRoll = Math.trunc(Math.random() * sizeOfDice) + 1;
//         rolledArray.push(diceRoll);
//         rollTotal += diceRoll;
//     }

//     return {
//         roll: rolledArray,
//         total: rollTotal,
//     };
// }

// console.log(roll("10d20"));

// Mini Exercise
// -Create an array with five strings representing your favorite artists (music or otherwise) and store it in a
// variable called favoriteArtists
// -Write a function that accepts an array as a parameter and...
// -> logs the first, third, and last elements of that array
// -Invoke your function and pass favoriteArtists as an argument

// let favArtists = ["Rona", "NF", "Eminem", "Lua"]
//
// function firstThirdLast(array) {
//     console.log(array[0]);
//     console.log(array[2]);
//     console.log(array[array.length-1]);
// }
//
// firstThirdLast(favArtists);

// let numbers = [2000, 1000, 20, 56, 42]

// function mirrorNum() {
//     for (var i = 1; i < 10; i++) {
//         console.log(i.toString().repeat(i))
//     }
// }

// mirrorNum();

// *** MINI EXERCISE 10 minutes ***
// Declare an array of two objects for movies
//     that have the following member values:
//     title (string)
// year released (int)
// rating (string)
// director (string)
// imdb rating (decimal)
// academy award win (boolean)
// Use imdb.com to look up the info or make up your own info
// write a printMovie function that takes a movie as a parameter and prints its info.
//     call it with each of your array elements.
//     write a printMovies function that takes an array as a parameter,
//     iterates over the array, and calls printMovie on each of the array elements (edited)

// let movies = [];

// movies[0] = {
//     year : 1996,
//     genre : ["fantasy", "action", "sci-fi"],
//     myRating : 15,
//     rate : function(rating) {
//         this.myRating = rating;
//     },
//     directors : {
//         name : "Ashley",
//         age : 47,
//         opinon : "meh"
//     }

// }


// movies[1] = {
//     year: 2017,
//     genre: ["horror", "fantasy"],
//     myRating : 277,
//     rate : function(rating) {
//         this.myRating = rating;
//     }

// }

// function printMovies(movie) {
//     console.log(movie)


// printMovies(movies[0]);
// printMovies(movies[1]);

// function printMovie(movie) {
//     console.log(movie);
// }

// function printMovies(movies) {

//     movies.forEach(function (movie) {
//         printMovie(movie);
//     })
// }

// printMovies(movies);
// movies[0].myRating(15)

// ** Continuing MINI EXERCISE until lunch ***
// Change the director member of your movies to an object
// with firstName and lastName members
// Make an array member for your movies called genres.
//     It is an array of string elements where each element
// is one of your movies’ genres from imdb.com
// and change your printMovie function

// let books = [];

// books[0] = {
//     title : "the title",
//     author :{

//     }
// }



// this code will produce a console log every second
// when count >= max, the interval is cancelled, and the logging will stop

// var count = 0;
// var max = 10;
// var interval = 1000; // interval time in milliseconds

// var intervalId = setInterval(function () {
//     if (count >= max) {
//         clearInterval(intervalId);
//         console.log('All done');
//     } else {
//         count++;
//         console.log('Repeating this line ' + count);
//     }
// }, interval);


// var delay = 5000; // delay time in milliseconds

// var timeoutId = setTimeout(function () {
//     alert('Here is a delayed hello!');
// }, delay);

// to cancel the timeout, you can call
// clearTimeout(timeoutId);
// prior to the delay expiring

// let randomObject = {
//     firstName : "wesley",
//     lastName : "bernard"
    
// }

// randomObject.middleName = "dominique"

// // console.log(randomObject.middleName)

// console.log(randomObject)

let randomArray =["UwU", "OwO", "Lmao", "GotIt", "ItWorks", "I'mCracked", "OwO", "JustChecking"]

// function arrayToString(myArray) {
//     let s = ""
//     for (let i = 0; i < myArray.length; i++) {
//         s += myArray[i];
//
//     }
//     console.log(s)
// }
//
// arrayToString(randomArray);

// function arrayToString(myArray) {
//     let s = ""
//     myArray.forEach(function (array) {
//         s += `${array}, `;
//     })
//     console.log(s.substr(0,s.length-2));
// }
//
// arrayToString(randomArray);

// function removeAll(array,value) {
//     for (let i = 0; i < array.length; i++) {
//         if(array[i] === value) {
//             array.splice(value, 1);
//             i--
//         }
//     }
//     return array
// }
// console.log(removeAll(randomArray, "OwO"))

// Write a JS function called getNthCat that takes an array of cat objects as a first parameter called cats, and n as a second parameter.
//     The function returns the cat object at index n in the cats array.
//     For example:

// let myCats = []

// myCats[0] = {
//     catName: "Apollo",
//     age: 9
// }
// myCats[1] = {
//     catName: "Lucy",
//     age: 4
// }

// myCats[2] = {
//     catName: "Hythlodaeus",
//     age: 17
// }

// function someCat(cats, int) {
//     if(int < 0 || int >= cats.length) {
//         return "There's no cat there, my dude"
//     }
//     return cats[int];
// }

// console.log(someCat(myCats, 2));
// console.log(Date.now())
// console.log(Date.getMonth)

// Write a function called reverseString that takes in a string and returns a string that has the characters of the original string in reverse order.
//     example: reverseString('hello') - returns 'olleh'
// let sampleStr = "hello"
// // console.log(sampleStr.split(""));
// let reversedStr = ""
//
//
// function reverseStr(str) {
//     reversedStr = str.split("")
//     reversedStr.reverse()
//     return reversedStr.join("")
// }
//
// console.log(reverseStr("OwOUwULmao"))

// Write a function called findAverage that takes in an array of integers representing grades and returns the average.
//     Example input: [95, 74, 86, 100]
// Example output: 88.75

// let nummys = [17, 5, 28, 60, 19, 72]
//
// function findAverage(intArray) {
//     let average = 0
//     for (let i = 0; i < intArray.length; i++) {
//         average += intArray[i]
//         // console.log(average);
//     }
//     return average / intArray.length
// }
//
// // console.log(nummys.length);
//
// console.log(findAverage([95, 74, 86, 100]));

function sumOfSquares(a, b) {
    return (a * a) + (b * b)
}

console.log(sumOfSquares(2, 3));