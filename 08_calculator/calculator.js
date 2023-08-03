const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArr) {
  let result = 0;
	for (let num of numArr) {
    result += num;
  }
  return result;
};

const multiply = function(numArr) {
  let result = 1;
	for (let num of numArr) {
    result *= num;
  }
  return result;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  let result = 1;
	for (let i = num; i > 1; i--) {
    result *= num;
    num --;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
