const reverseString = function(str) {
    // create a variable to store the new string
    const newStr = []
    // convert the string into an array
    const strArr = str.split('')
    // loop through the array in reverse order
    for (let i=str.length; i >= 0; i--) {
        // add each value to the new string array
        newStr.push(str[i])
    }
    // convert the array back into a string and return it
    return newStr.join('')
}

module.exports = reverseString
