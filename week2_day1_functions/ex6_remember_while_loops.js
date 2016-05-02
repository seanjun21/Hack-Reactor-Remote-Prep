function factoral_of_n (n) {
	var output = 1;
	while (n > 0) {
		output *= n;
		n--;
	}
	return output;
}

// function factoral_of_n (n) {
// 	if (n === 0) {
// 		return 1;
// 	} 
// 	return n * factoral_of_n(n - 1);
// }

console.log(factoral_of_n(10));



function count_by_n (count_by, count_up_to) {
	var output = 0;
	while (output < count_up_to) {
		output += count_by;
		console.log(output);
	}
}

count_by_n(5,100);