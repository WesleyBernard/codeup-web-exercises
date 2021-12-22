function test_prime(n) {
    if (n === 1) {
        return false;
    } else if (n === 2) {
        return true;
    } else {
        for (var x = 2; x < n; x++) {
            if (n % x === 0) {
                return false;
            }
        }
        return true;
    }
}
let count = 0;
while (count < 50) {
    if (test_prime(count) === true && count >= 2) {
        console.log(count);
    }
    count++;
}

console.log(test_prime(count));