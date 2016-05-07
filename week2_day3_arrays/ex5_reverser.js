// write a function reverser which takes an array of values as input
function reverser (array) {
//return a new array of same values in reverse order
	var original_array_length = array.length;
	var reversed_array = [];
	//use for loop to populate this new array
	for (var i = 0; i < original_array_length; i++){
	//need to add to new array in reverse order (from back)
		reversed_array[i] = array.pop();
	}
	return reversed_array;
}

var test_array = [1, 4, 5, 7, 19, 30, 53];

console.log(reverser(test_array));