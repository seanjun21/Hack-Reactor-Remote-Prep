var numbers = [2, 4, 5, 37, 0];
var doubled_numbers = {}; // should be { 2: 4, 4: 8, 5: 10, 37: 74, 0: 0 }

for (var count = 0; count < numbers.length -1 ; count++) {
	doubled_numbers[numbers[count]] = numbers[count] + numbers[count] ;
	
}

console.log(doubled_numbers);

/*numbers.forEach(function(value, index) {
	doubled_numbers[value] = numbers[index] + numbers[index] ;

})*/

/*console.log(doubled_numbers);*/