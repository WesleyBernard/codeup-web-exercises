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

// let randomArray = ["UwU", "OwO", "Lmao", "GotIt", "ItWorks", "I'mCracked", "OwO", "JustChecking"]

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

// function sumOfSquares(a, b) {
//     return (a * a) + (b * b)
// }
//
// console.log(sumOfSquares(2, 3));

// function whichStringIsLonger(str1, str2) {
//     if (typeof str1 !== "string" || typeof str2 !== "string") {
//         return "One or both of these is not a string, try again."
//     } if (str1.length > str2.length) {
//         return "First string is longer"
//     } if (str2.length > str1.length) {
//         return "Second string is longer"
//     } if (str1.length === str2.length) {
//         return "Both strings are of equal length"
//     }
//
// }
//
// console.log(whichStringIsLonger("super duper omegalol", true));

// Write a function called convertLowHighToObject that takes in a string  that represents the low and high temperature in this format '35, 42' (assuming low will always be the left value and high the right) and returns an object with the properties 'low' and 'high' with the values of those respective properties set to the corresponding values in the input string.
//     NOTE: the values in the object should be of the number type
// Example input: '35, 42'
// Example return: {low: 35, high: 42}

// function convertLowHighToObject(str) {
//     let myArray = str.split(", ")
//     return {
//         low: parseInt(myArray[0]),
//         high: parseInt(myArray[1])
//     }
//
// }
//
// console.log(convertLowHighToObject("33, 48"));

// console.log(parseFloat("000"));

// function numericsCheck(str) {
//     for (let i = 0; i <= str.length ; i++) {
//         if (isNaN(str[i]) === false) {
//             return i
//         }else if (i === str.length-1){
//             return 1
//         }
//     }
// }
//
// console.log(numericsCheck("Hello10"));
//
// function incrementString(str) {
//     let numbers = numericsCheck(str)
//     let answer = ""
//     let oldStr = ""
//     let zeroes = 0
//     if (numbers === 1) {
//         return str + 1
//     }
//     for (let i = numbers; i <=  str.length-1; i++) {
//         if(str[i] === "0"){
//             zeroes++
//         }
//         answer += str[i];
//
//     }
//     for (let i = 0; i < numbers; i++) {
//         oldStr += str[i]
//
//     }
//     let newStr = parseInt(answer) + 1
//     let finalAnswer = (oldStr + newStr)
//     let gotIt = finalAnswer[finalAnswer.length-1]
//     let omgPlease = parseInt(gotIt) + 1
//     if( zeroes === 0) {
//         return finalAnswer
//     }
//     if (zeroes > 0) {
//         return zeroes
//     }
//
//
// }

// function incrementString(str) {
//     let numbers = []
//     let letters = []
//     let zeroes = 0
//     let zStr = ""
//     let theArray = str.split("")
//     for (let i = 0; i < theArray.length; i++) {
//         if (isNaN(theArray[i])) {
//             letters += theArray[i];
//         } else if(!isNaN(theArray[i])) {
//             numbers += theArray[i];
//         }
//         if(theArray[i] === '0') {
//             zeroes++
//         }
//     }
//     if (zeroes > 0) {
//         for (let i = 0; i < zeroes; i++) {
//             zStr += "0"
//
//         }
//     }
//     if (numbers === []) {
//         return str + 1
//     } else console.log(numbers);
//     return letters + zStr + (parseInt(numbers) + 1)
//
// }
//
// console.log(incrementString("I'mCracked"));
// console.log(incrementString("foo"));
// console.log(incrementString("foobar23"));
// console.log(incrementString("foo0042"));
// console.log(incrementString("foo9"));
// console.log(incrementString("foo099"));
// // extra test case
// console.log(incrementString("foo000"));

// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// function camel(str) {
//     if (str.includes("-")) {
//         let answer = str.split("-")
//         for (let i = 0; i < answer.length; i++) {
//             if (i > 0) {
//                 answer[i] = answer[i].slice(0, 1).toUpperCase() + answer[i].slice(1)
//                 console.log(answer[i]);
//                 //console.log(typeof answer[i][0])
//             }
//         }
//         console.log(answer);
//         return answer.join("")
//     }
//     if (str.includes("_")) {
//         let answer = str.split("_")
//         for (let i = 0; i < answer.length; i++) {
//             if (i > 0) {
//                 answer[i] = answer[i].slice(0, 1).toUpperCase() + answer[i].slice(1)
//                 console.log(answer[i]);
//                 //console.log(typeof answer[i][0])
//             }
//         }
//         console.log(answer);
//         return answer.join("")
//     }

// }
//
// console.log(camel("the-stealthy-warrior"));
// console.log(camel("the_stealthy_warrior"));
// console.log(camel("I'm-pretty-sure-i-did-it"));

// const isDivisibleBy3 = n => n % 3 === 0;
//
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// console.log(numbers.filter(isDivisibleBy3));
// console.log(numbers);

// function sayHello(name) {
//     return 'Hello, ' + name + '!';
// }
// const sayHello = (name) => { 'Hello, ' + name + '!' }
//
// console.log(sayHello("Wesley"));
// ``
// ''

// Write a function called countDuplicates that takes in a string and returns an object that contains the count for each letter within the given string.
//     ex: countDuplicates("adsjfdsfsfjsdjfhacabcsbajda")
// returns { a: 5, d: 4, s: 5, j: 4, f: 4, h: 1, c: 2, b: 2 }

// function countDuplicates(str){
//     let arr = str.split("")
//         .filter(function (item, pos, self) {
//         return self.indexOf(item) === pos;
//     })
//     console.log(arr)
//     for (let i = 0; i < arr.length; i++) {
//        let oldArr = str.split("")
//            oldArr.reduce(arr[i],oldArr[0], )
//
//     }
//
//
// }
//
// countDuplicates("skdfjfkjadhsf")

// Raymond's answer below

// const countDuplicates = function (string){
//     return string.split('').reduce((total, letter) => {
//         total[letter] ? total[letter]++ : total[letter] = 1;
//         return total
//     }, {})
// }
// console.log(countDuplicates("adsjfdsfsfjsdjfhacabcsbajda"))

// Write a function called makePerson. It takes 2 arguments: personName and age.
//     personName must be at least 1 character long. age must be between 1 and 150.
// If either of the parameters is invalid, output an appropriate message to the console and return FALSE.
//     If both parameters are valid, return an object containing personName and age.
//     E.g.,
//     console.log(makePerson("Bob", 30)); // outputs {personName:"Bob", age:30}
// console.log(makePerson("", 30));
// // outputs:
// Person name cannot be blank
// false

// function makePerson(name, age){
//     let person = {
//         personName: "",
//         age: 0
//     }
//         if(name.length < 1 || age > 150 || age < 1){
//             console.log("non-valid parameters. Please note that Name must be at least 1 character long. age must be between 1 and 150. Please try again")
//             return false;
//     }
//         person.personName = name
//     person.age = age;
//     console.log(person)
// }
//
// makePerson("Wesley", 25)

// Write a function called removeVowels.
//     Takes a parameter called originalString.
//     Returns a string that is based on the originalString but with all of the vowels removed.
//     Do not modify originalString.
//     Provide a main or equivalent where you can test your function and output the result.
// ExamplesremoveVowels("aeiou") -> ""
// removeVowels("happy dog") -> "hppy dg"
// removeVowels("") -> ""


let removeVowels = function (originalString) {
    let theString = originalString
    let array = theString.split("")
    console.log(array)
    array.forEach(letter => {
        if letter = ""
    })
    return theString;
}

console.log(removeVowels("lol"))

