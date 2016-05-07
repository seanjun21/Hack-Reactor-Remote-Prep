var type_tester = function(input) {
	if (Array.isArray(input) === true) {
		console.log('array');
	} else {
		input = typeof(input);
   		console.log(input);
	}
};

type_tester(3);
type_tester('hello');
type_tester({});
type_tester([]);
type_tester(function(){console.log('hello')});