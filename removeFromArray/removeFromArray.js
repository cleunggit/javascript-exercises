const removeFromArray = function(arr, ...arg) {
    // let args = Array.from(arg)
    // loop through the array
    return arr.filter(el => !arg.includes(el))
    // compare each element to the argument
    // if the element is not equal to the argument return the element
    // return a new array
}

module.exports = removeFromArray
