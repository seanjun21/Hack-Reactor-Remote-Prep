var cat = {
	name : 'Bob',
	age : 2,
	color : 'Brown',
	breed : 'Tabby'
};

var dream_car = {
	make : 'Tesla',
	model : 'type-s',
	color : 'black',
	year : 2014,
	registered : true
}

var dream_life = {
	job : 'Programmer',
	salary : '$1000000000000',
	house : 'Mansion',
	family : true
}

// for (var item in cat) {
// 	console.log(cat[item]);
// };

// for (var category in dream_car) {
// 	console.log(dream_car[category]);
// }

for (var column in dream_life) {
	console.log(dream_life[column]);
}
