var log_and_return = function () {
	console.log(arguments);
	return arguments;
};

var returned_values = log_and_return('Hello', 'World');

log_and_return(returned_values);