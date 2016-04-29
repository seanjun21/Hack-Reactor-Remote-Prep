// var n = 0;

// while ( n <= 20 ) {
//   if ( n !== 13 ) {
//   	n % 2 === 0 ? console.log("I like the number " + n + ", a nice even number.") : 
// 				console.log("I like the number " + n + ", odd is okay too!");
//   } else {
//     console.log("la-la-la, nothing to say here");
//   }
//   n++;
// }

var n = 0, output = "";

while ( n <= 20 ) {
  if ( n !== 13 ) {
    output += "I like the number " + n;
    output += n % 2 === 0 ? ", a nice even number.\n" : ", odd is okay too!\n";
  } else {
    output += "la-la-la, nothing to say here\n";
  }
  n++;
}

console.log(output);
