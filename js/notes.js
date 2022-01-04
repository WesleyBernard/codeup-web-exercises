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
//         } else if (i % 2 === 0) {
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

var answer = "helloworld"
function getPassword() {
    for(let i = 0; i < 3; i++) {
        let password = prompt("Please enter the password");
        if (password === answer) {
            alert("correct password");
            break;
        }else if(i === 1) {
            alert("You only have one mnore attempt");
        } else if (i === 2) {
            alert("Too many incorrect attemmpts, see ya.");
        }
    }
}

getPassword();