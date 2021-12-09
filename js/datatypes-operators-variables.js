// 1
var a = 1;
var b = a++;
var c = ++a;
// what is the value of a, b, and c?
console.log(a);

console.log(b);

console.log(c);

var d = "hello";
var e = false;

console.log(d++);
console.log(e++);

var perplexed; // perplexed is undefined (no value is assigned)
console.log(perplexed + 2);

var price = 2.7;
console.log(price.toFixed(2));

//2
var sample = "Hello Codeup"

console.log(sample.length);

console.log(sample.toUpperCase());

var sample = sample + " Students"

console.log(sample);

sample = sample.replace("Students", "Class");

console.log(sample);

console.log(sample.indexOf("c")) //retuens -1

console.log(sample.indexOf("C"));

console.log(sample.indexOf("Codeup"));

console.log(sample.substr(6, 6));

//3

var mermaid = 3
var bear = 5
var herc = 1

console.log((3 + 5 + 1) * 3);

var google = 400 * 6;
var amazon = 380 * 4;
var facebook = 350 * 10;

console.log(google + amazon + facebook);

var course = "space"

var conflict = "yes"

console.log(course !== "full" && conflict == "No");

sales = "1"

var premium = "no"

console.log(parseInt(sales) > 2 || premium == "yes");

var username = "codeup";

var password = "notastrongpassword";

console.log(password.length >= 5);

console.log(!password.includes(username));

console.log(username.length <= 20);

console.log(username == username.trim() && password == password.trim());

