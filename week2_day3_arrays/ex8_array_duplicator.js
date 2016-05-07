var array_duplicator = function(inputArray) {
    var outputArray = [];

    // Your code here!
    var outputArray = inputArray.slice();
    // Create a function array_duplicator, that takes an array as an input, 
    // and returns a copy as the output.



    return outputArray;
};

var original = [1, 2, 3, 4];
var duplicated = array_duplicator(original);

duplicated.pop();
duplicated.pop();
duplicated.pop();

console.log(original, duplicated); // should not be the same!



// var arr2 = arr;
// arr2.pop(); // both arr and arr2 are changed!!

// var arr3 = arr.slice(); // clones the array
// arr3.pop(); // only arr3 is changed

