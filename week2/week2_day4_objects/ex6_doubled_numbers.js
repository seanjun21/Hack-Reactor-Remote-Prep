var numbers = [2, 4, 5, 37, 0];
var doubled_numbers = {}; // should be { 2: 4, 4: 8, 5: 10, 37: 74, 0: 0 }

for (var i = 0; i < numbers.length -1 ; i++) {
	doubled_numbers[numbers[i]] = numbers[i] + numbers[i] ;
	
}

console.log(doubled_numbers);

/*numbers.forEach(function(value, index) {
	doubled_numbers[value] = numbers[index] + numbers[index] ;

})*/

/*console.log(doubled_numbers);*/

console.log(doubled_numbers['37']);