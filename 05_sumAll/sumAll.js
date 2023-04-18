const sumAll = function(firstNum, lastNum) {
    let sum = 0;
    for (let i = firstNum; i <= lastNum; i++) {
        sum += i;
    }
    
    if (firstNum < 0 || lastNum < 0 || isNaN(firstNum) || isNaN(lastNum)) {
        return 'ERROR';
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
