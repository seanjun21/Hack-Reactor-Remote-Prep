var favorites = [];

var famous = ['alex smith', 'amy whinehouse', 'cameron diaz', 'brad pitt',
    'ashton kutcher', 'mark whalberg', 'morgan freeman', 'mila kunis'];

famous.forEach(function(value, index) {
	if (famous[index][0] === 'a') {
		favorites.push(famous[index]);
	}
});

console.log(favorites);


hi 1
hi 2 meet 1
hi 3 meet 1 and 2
hi 4 meet 1, 2, and 3
hi 5 meet 1, 2, 3, and 4