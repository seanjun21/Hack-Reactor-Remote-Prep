// By definition, the first two numbers in the Fibonacci sequence are 0 and 1, 
// and each subsequent number is the sum of the previous two. 
// For example, the first ten Fibonacci numbers are:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

// Write a function that accepts a number and 
// returns the number at that position in the fibonnaci sequence.

var fibonnaci = function (n) {
	//if n equals 1
	if (n === 1) {
		// return 0
		return 0;
	}

	//if n equals 2
	if (n === 2) {
		// return 1
		return 1;
	}

	//declare counter variable - start from 2
	var i = 2;
	//declare a sum variable
	var sum;
	
	//while counter is less than n
	//sum last two number

	while (i < n) {
		sum = fibonnaci(n-2) + fibonnaci(n-1);
		i++;
	}
	//return sum
	return sum;
}

console.log(fibonnaci(10));

