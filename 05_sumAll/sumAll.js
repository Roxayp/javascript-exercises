// create a function that takes two numbers and returns the sum of those two numbers and all numbers between them.
// The lowest number will not always come first.
// For example, sumAll(4, 1) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.


const sumAll = function(n1, n2) {
    let sum = 0;
    if (n1 < 0 || n2 < 0) {
        return 'ERROR';
    } else if (typeof n1 != 'number' || typeof n2 != 'number') {
        return 'ERROR';
    } else if (n1 > n2) {
        for (let i = n2; i <= n1; i++) {
            sum += i;
        }
    } else {
        for (let i = n1; i <= n2; i++) {
            sum += i;
        }
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
