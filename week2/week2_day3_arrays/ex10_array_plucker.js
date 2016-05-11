// var frenemies = ['ada', 'will', 'bianca', 'abe', 'john', 'alice'];
// var starting_at_index = 3;
// var number_to_remove = 2;

// var removed_elements = frenemies.splice(starting_at_index, number_to_remove);

// console.log("We took out ", removed_elements);
// console.log("The remaining array ", frenemies);

var array_plucker = function(array1, index_to_remove) {
  var removed_value;

  // Your code here!
  removed_value = array1.splice(index_to_remove, 1);

  return removed_value;
};

var days_of_school = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

var day_off = array_plucker(days_of_school, 4);

console.log("I'll go to school on: ", days_of_school);
console.log("but I'm taking vaction on ", day_off);