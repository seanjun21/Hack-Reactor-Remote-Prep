function biggest_smallest (array) {
	var new_array = [Infinity, -Infinity];
	array.forEach(function(number){
		new_array[0] = Math.min(new_array[0], number);
		new_array[1] = Math.max(new_array[1], number);
	});
	return new_array;
}

var test_array = [1,2,3,4,5,6,7,8,9,10];

console.log(biggest_smallest(test_array));