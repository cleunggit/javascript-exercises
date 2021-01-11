const repeatString = function(word, times) {
    let repeatedStr = ''
    // if times is -1 return an error message
    if (times < 0) return 'ERROR'
    for (let i=0; i < times; i++) {
        repeatedStr += word
    }
    return repeatedStr
}

module.exports = repeatString
