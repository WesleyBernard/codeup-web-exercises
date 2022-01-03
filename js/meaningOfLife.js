// B) getMeaningOfLife
// Write a function named getMeaningOfLife which accepts one parameter, meaningfulNum.
//     This function will use a while loop to compare its current number (a variable named counter)
//     against the meaningfulNum.
//     While the counter is not equivalent to the meaningfulNum, continue the loop.
//     Once that condition is broken, console log a string telling the user "The meaning of life, the universe,
//     and everything is [your meaningful number]"
// Thinking about the above function, getMeaningOfLife, let's ask a question: What happens if the value
// of meaningfulNum is a non-numeric?
// Write some code to account for this case. How the function handles the situation is up to you!
//     Let's continue with getMeaningOfLife: If the value of meaningfulNum happens to be 42, console log a
//     separate message at the end of the function to say: "Did you bring your towel?"

let counter = 0
function getMeaningOfLife(meaningfulNum) {
    if (isNaN(parseInt(meaningfulNum)) === true) {
        console.log("That's not a number, 5head.");
        return;
    }
    while (counter !== parseInt(meaningfulNum)) {
        counter++
    }
    console.log("The meaning of life, the universe, and everything is " + meaningfulNum + "!");
    if (meaningfulNum == 42) {
        console.log("Did you bring your towel?");
    }
}

getMeaningOfLife(undefined);