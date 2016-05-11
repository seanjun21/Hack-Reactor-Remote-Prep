// Sean Jun and Andy Hoskins

var bucketlist = ["HackReactor", "surfing"];
bucketlist.push("Skydiving", "motorsport");
bucketlist.unshift("swimming with sharks", "mountain climbing");
console.log(bucketlist);
console.log(bucketlist.length);

var dying_wish = bucketlist.pop();
console.log(dying_wish);

var do_it_now = bucketlist.shift();
console.log(do_it_now);

console.log(bucketlist.length);
