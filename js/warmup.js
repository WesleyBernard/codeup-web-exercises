var creditScore = 590
var cash = 9000
var accepted = (creditScore > 680 && cash >= 4000) || cash >= 10000;

console.log(accepted);