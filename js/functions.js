function sayHello(name) {
    return "Hello, " + name;
}

console.log(sayHello("Codeup"));

var helloMessage = sayHello("Wesley");

console.log(helloMessage);

var myName = "Wesley";

console.log(sayHello(myName));

var random = Math.floor((Math.random() * 3) + 1);

function isTwo(x) {
    return x == 2;
}

console.log(isTwo(random));

function calculateTip(x , y) {
    return x * y;
}

console.log(calculateTip(.20 , 40));

function applyDiscount(x , y) {
    return x - (x * y);
}

console.log(applyDiscount(100 , 0.10));
