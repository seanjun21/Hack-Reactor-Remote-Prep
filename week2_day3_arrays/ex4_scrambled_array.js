var scrambled_poem = "roses red are bacon crispy i bacon love and is blue violets are";
var scrambled_array = scrambled_poem.split(' ');

var unscrambled_array = [];
  while (scrambled_array.length > 0) {
    var FIRST = scrambled_array.shift();
    var LAST = scrambled_array.pop();
    unscrambled_array.push(FIRST, LAST);
  }

// console.log(unscrambled_array);

var new_array = unscrambled_array.join(' ');

console.log(new_array);
