const print = require('./print');

let number = 1;
let newNumber = number;

print('Before');
console.log('number = ', number);
console.log('newNumber = ', newNumber);

print('After');
newNumber = number + 1;
console.log('number = ', number);
console.log('newNumber = ', newNumber);