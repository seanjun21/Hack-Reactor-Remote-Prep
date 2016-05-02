function tripler (num) {
	return num * 3;
}

function multiply (num1, num2) {
	return num1 * num2;
}

function divide (num1, num2) {
	return num1 / num2;
}

function remainder (num1, num2) {
	return num1 % num2;
}

console.log(remainder(divide(multiply(tripler(5), 12), 2), 3));

console.log(remainder(divide(multiply(tripler(35), 2), 7), 5));

console.log(remainder(divide(multiply(tripler(4), 9), 8), 2));

console.log(remainder(divide(multiply(tripler(10), 5), 7), 6));
