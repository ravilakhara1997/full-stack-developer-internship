// import function to use hear

const { sum, sub, mul, div } = require("./calculator");
const student = require("./object")

console.log('Addition:',sum(25,26));
console.log('Substraction:' ,sub(50,25));
console.log('Multipliction:',mul(25,26));
console.log('Divition:',div(50,2));

student.print()