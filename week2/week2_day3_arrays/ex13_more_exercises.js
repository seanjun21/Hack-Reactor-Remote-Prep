// Write a function that takes an array of values and returns an boolean 
// representing if the word "hello" exists in the array.

function find (array) {
	for (var i = 0; i<array.length; i++) {
		if (array[i] === 'hello') {
			return true;
		}
	}
	return false;
}

array1 = ['hi', 'my', 'name', 'is', 'Sean', 'hello'];

console.log(find(array1));

//Write a function that takes an array of values and a target value 
// and returns how many times that target value exists in the array.

function howMany (array, target) {
	var counter = 0;
	for (var i = 0; i < array.length; i++) {
		if (array[i] === target) {
			counter++;
		}
	}
	return counter;
}

array2 = [1,2,3,4,4,4,4,5,5];
console.log(howMany(array2, 5));

//Write a function that takes an array and returns a new array 
//containing only the values at odd indexes in that array.

function oddArray (array) {
	var new_array = [];
	for (var i = 1; i<array.length; i+=2) {
		new_array.push(array[i]); 
	}
	return new_array;
}

array3 = [0,1,2,3,4,5,6,7];
console.log(oddArray(array3));

//Write a function called sum_array that takes an array of numbers 
// and returns the sum of all of those numbers added together.

function sum_array (array) {
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return sum;
}

array4 = [1,2,3,4,5];
console.log(sum_array(array4));

// Write a function called array_math that takes an array of numbers 
//and a string with a mathmatical operator and applies that operator 
//to all the numbers together. array_math([4,2,3], "*") should return 24

function array_math (array, string) {
	var answer;
	if (string === '+') {
		answer = array[0];
		for (var i = 1; i<array.length; i++) {
			answer += array[i];
		}
	} else if (string === '-') {
		answer = array[0];
		for (var i = 1; i<array.length; i++) {
			answer -= array[i];
		}
	} else if (string === '*') {
		answer = array[0];
		for (var i = 1; i<array.length; i++) {
			answer *= array[i];
		}
	} else if (string === '/') {
		answer = array[0];
		for (var i = 1; i<array.length; i++) {
			answer /= array[i];
		}
	} else if (string === '%') {
		answer = array[0];
		for (var i = 1; i<array.length; i++) {
			answer %= array[i];
		}
	}
	return answer;
}
console.log(array_math([4,2,3], '+'));
console.log(array_math([4,2,3], '-'));
console.log(array_math([4,2,3], '*'));
console.log(array_math([4,2,3], '/'));
console.log(array_math([4,2,3], '%'));

// Write a zipper function that combines two arrays in alternating order, 
// zipper([1,2,3],['a','b','c']) should return [1, 'a', 2, 'b', 3, 'c']. 
// Make sure to handle cases where one array is longer than the other.

function zipper (array1, array2) {
	var combined = [];


	if (array1.length >= array2.length) {
		for(var i=0; i<array1.length; i++) {
			combined.push(array1[i]);
			combined.push(array2[i]);
		};
	} else if (array2.length > array1.length) {
		for(var i=0; i<array2.length; i++) {
			combined.push(array2[i]);
			combined.push(array1[i]);
		};
	}
	combined = combined.filter(Boolean);
	return combined;
}
arry1 = [1,2,3];
arry2 = ['a','b','c','d'];
console.log(zipper(arry1, arry2));

// Write a function that merges two sorted lists into a new list. 
// merge_sorted([1, 2, 5, 9], [3, 7, 19]) should return [1, 2, 3, 5, 7, 9, 19]

function merge (array1, array2) {
	var combined = [];

	if (array1.length >= array2.length) {
		for(var i=0; i<array1.length; i++) {
			combined.push(array1[i]);
			combined.push(array2[i]);
		};
	} else if (array2.length > array1.length) {
		for(var i=0; i<array2.length; i++) {
			combined.push(array2[i]);
			combined.push(array1[i]);
		};
	}
	function sortNumber(a,b) {
    	return a - b;
  	}
  	combined.sort(sortNumber);

	combined = combined.filter(Boolean);
	return combined;	
}

numbers1 = [1, 10, 2, 21];
numbers2 = [3, 8, 5, 23, 7];
console.log(merge(numbers1, numbers2));

//Write a function that creates an array of the first 100 Fibonacci numbers.

function fiboHundred () {
	var answer = [0, 1];
	var sum;

	for (var i = 2; i <= 100; i++) {
		sum = answer[i-2] + answer[i-1];
		answer.push(sum);
	}
	return answer;
}

console.log(fiboHundred());


			

			





