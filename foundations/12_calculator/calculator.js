const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((accumulator, num) => accumulator + num, 0);
};

const multiply = function(arr) {
  return arr.reduce((accumulator, num) => accumulator * num, 1);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(num) {
	const factArr = [];
  for (let a = num; a >= 1; a --) {
    factArr.push(a);
  }
  return factArr.reduce((accumulator, number) => accumulator * number, 1);
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
