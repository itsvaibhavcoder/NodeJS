const math = require("./math")
console.log("NodeJS Started");

console.log(math(5,6));

//In case Object export in math.js
// You can also destructure 
console.log(math.add(5,6));
console.log(math.sub(8,9));

