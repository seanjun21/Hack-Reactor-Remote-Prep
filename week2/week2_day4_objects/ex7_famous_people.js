var favorites = [];

var famous = ['alex smith', 'amy whinehouse', 'cameron diaz', 'brad pitt',
    'ashton kutcher', 'mark whalberg', 'morgan freeman', 'mila kunis'];

famous.forEach(function(value, index) {
	if (famous[index][0] === 'a') {
		favorites.push(famous[index]);
	}
});

console.log(favorites);

var obama_jobs = [];

var politicos = {
    secretary_of_state: 'hillary clinton',
    potus: 'barack obama',
    flotus: 'michelle obama',
    vice_prez: 'joe biden',
    gov_of_california: 'jerry brown'
};

for (var position in politicos) {
	famous.push(politicos[position]);
}

console.log(famous);

for (var position in politicos) {
	if (politicos[position].indexOf('obama') > -1) {
		obama_jobs.push(politicos[position]);
	}
}

console.log(obama_jobs);

var b_named_politicos = {};

for (var position in politicos) {
	if (politicos[position].indexOf('b') === 0) {
		b_named_politicos[position] = politicos[position];
	} else if (politicos[position].indexOf(' b') > -1) {
		b_named_politicos[position] = politicos[position];
	}
}

console.log(b_named_politicos);

var reverse_politico_lookup = {};

for (var position in politicos) {
	reverse_politico_lookup[politicos[position]] = position;
}

console.log(reverse_politico_lookup);





