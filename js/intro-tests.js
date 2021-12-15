// Mini-Exercise:
// Create a new JS file under the js directory named intro-tests.js
// Write a function called count(input) that takes in a string and returns the number of characters.
//     Test to ensure this function will:
// return the accurate length of the string
// return a false in the event the argument given is not a string
// Account for: numbers, booleans, undefined, null

function count(input) {
    console.log(input.length);
}

// count("UwU");

function countTest(input) {
    // accounting for null or undefined
    if (input === null || input === undefined) {
        console.log("Ew, that was null or or undefined, this function will now implode");
        return;
    }

    // testing accuracy of string length
    let actual = input.length
    let expected = 3
    console.log(actual === expected);

    //testing for response to non-string

    if (typeof input === 'string') {
        console.log("Poggers, we got a string");
    } else {
        console.log("I don't think that was a string, my guy");
        console.log(typeof input);
    }
}

countTest("UwU");
countTest(27);
countTest(null);
countTest(undefined);
countTest(true);

