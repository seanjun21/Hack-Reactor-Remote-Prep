var i = 1, j, n = 5, string = "";

while ( i <= n ) {
  string = "welcome " + i;
  j = 1;
  while ( j < i ) {
  	if (j === 1) {
  		string += ", meet " + j;
  	} else if (j === i-1) {
  		string += " and " + j;
  	} else {
  		string += ", " + j;
  	}
    j++;
  }
  console.log(string);
  i++;
}