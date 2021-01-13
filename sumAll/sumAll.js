const sumAll = function(int1, int2) {
    // create a variable to store the sum
    let sum = 0
    //check for negative numbers
    if (int1 < 0 || int2 < 0 || typeof int1 !== 'number' || typeof int2 !== 'number') return "ERROR"
    // check if int1 is greater than int2
    if (int1 > int2) {
        for (let i=int1; i >= int2; i--) {
            // on each iteration add the number to the sum
            sum += i
        }
    } else {
        // loop through the given numbers
        for (let i=int1; i <= int2; i++) {
            // on each iteration add the number to the sum
            sum += i
        }
    }
    // return the sum
    return sum
}

module.exports = sumAll
