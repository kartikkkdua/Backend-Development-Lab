module.exports = {
  utils: {
    mathematics: {
      addition: (a, b) => a + b,
      multiply: (a, b) => a * b,
    },
    star: {
      printStar: (number) => "*".repeat(number),
    },
  },
  print: (name) => `Welcome, ${name}!`,
};

// Errors :-
// 1) SyntaxError: Unexpected token  Missed a comma between objects
// 2) TypeError: utils.star.printStar is not a function , Forgot to define printStar inside star

