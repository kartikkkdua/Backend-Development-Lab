const { utils, print } = require("./module");
console.log(print("Kartik"));
console.log(utils.mathematics.addition(2, 3));

console.log(utils.star.printStar(1)); 
console.log(utils.star.printStar(3)); 
console.log(utils.star.printStar(5))

// Errors :- 
// 1) Error: Cannot find module './module'
// 2) did not import print and direclty trying to call the functions
// 3) Wrong output in printStar 
//    → First time used console.log("*".repeat()) without  number