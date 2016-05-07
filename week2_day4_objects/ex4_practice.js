var demo_object = {
    one: 1,  
    two: 2,	 	
    three: 3
};
var one = "three";

demo_object['two']; // 2
demo_object[one]; // 3

// console.log(demo_object['two']);
// console.log(demo_object[one]);

var state_capitals = {
    California: 'Sacramento',
    Texas: 'Austin'
};

var place = 'California';

state_capitals['place']; // undefined
state_capitals.place;   // undefined 
state_capitals[place]; // Sacramento

// console.log(state_capitals['place']);
// console.log(state_capitals.place);
// console.log(state_capitals[place]);

state_capitals['California']; // Sacramento
state_capitals.California;   // Sacramento
state_capitals[California]; // reference error

// console.log(state_capitals['California']);
// console.log(state_capitals.California);
// console.log(state_capitals[California]);