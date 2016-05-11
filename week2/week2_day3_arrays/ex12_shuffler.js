var strings = ['hey','what','is','going','on','words','everywhere']

function shuffler (array) {

	var array2 = array;
	var new_array = [];
	var counter = array.length;

	var i = 0;
	
	while (i<counter) {
		var rand = Math.floor(Math.random()*array2.length);
		new_array.push(array2.splice(rand, 1)[0]);
		i++;
	};
	return new_array;
};

console.log(shuffler(strings));


