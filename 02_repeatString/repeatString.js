// create a function to repeat a string a number of times
// repeatString('hey', 3) should return 'heyheyhey'
// repeatString('hey', 0) should return ''
// repeatString('hey', -1) should return 'ERROR'

const repeatString = function(x, y) {
    let string = '';
    if (y < 0) {
        return 'ERROR';
    } else {
        for (let i = 0; i < y; i++) {
            string += x;
        }
    }
    return string;
}


// Do not edit below this line
module.exports = repeatString;
