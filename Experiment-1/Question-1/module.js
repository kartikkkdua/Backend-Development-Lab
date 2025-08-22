module.exports = {
  utils: {
    mathematics: {
      addition: (a, b) => a + b,
      multiply: (a,b) => a*b,
    },
    star:{
      printStar :(number) => "*".repeat(number),
    }
  },
  print : (name) => `Welcome,${name}!`,
};
