const convertToCelsius = function(tempInF) {
  let celsius = (tempInF - 32) * (5/9);
  
  if(celsius % 1 === 0) {
    return celsius;
  } else {
    return parseFloat(celsius.toFixed(1));
  }
};

const convertToFahrenheit = function(tempInC) {
  let fahrenheit = (tempInC * 9/5) + 32;

  if(fahrenheit % 1 === 0) {
    return fahrenheit;
  } else {
    return parseFloat(fahrenheit.toFixed(1));
  }
  
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
