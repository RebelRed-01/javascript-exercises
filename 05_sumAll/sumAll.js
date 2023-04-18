const sumAll = function(firstNum, lastNum) {
    let sum = 0;

    if (lastNum < firstNum) {
        for (let i = firstNum; i >= lastNum; i--) {
            sum += i;
        }
    } else {
        for (let i = firstNum; i <= lastNum; i++) {
            sum += i;
        }
    }
    
    if (firstNum < 0 || lastNum < 0 || !Number.isInteger(firstNum) || !Number.isInteger(lastNum)) {
        return 'ERROR';
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
