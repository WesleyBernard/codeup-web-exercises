"use strict"

var mermaid = prompt("How many days have you had the lil mermaid?");
var bear = prompt("How many days have you had brother bear?");
var herc = prompt("how many days have you had hercules?");

let total = parseInt(mermaid) + parseInt(bear) + parseInt(herc);

console.log(total);

alert("You owe " + (parseInt(total) * 3))

let google =  prompt("How many hours did you work for google?");
let amazon = prompt("How many hours did you work for amazon");
let facebook = prompt("How many hours did you work for facebook?");

alert("You made" + ((parseInt(google) * 400) + (parseInt(amazon) * 380) + (parseInt(facebook) * 350)));

let space = confirm("Is there space in the class?");
let schedule = confirm("Does this class fit your schedule?");

if (space && schedule){
    alert("You may enroll");
} else {
    alert("You may not enroll");
}

let items = prompt("How many items are you buying?");
let offerValid = confirm("Is the coupon still valid?");
let premium = confirm("are you a premium member?");

if (((parseInt(items)) >= 2 && offerValid) || premium){
    alert("You may use the coupon");
} else {
    alert("you may not use the coupon");
}