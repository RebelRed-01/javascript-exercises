const reverseString = function(string) {
    let letters = string.split('');
    let lettersReversed = letters.reverse();
    return lettersReversed.join('');
};

// Do not edit below this line
module.exports = reverseString;
