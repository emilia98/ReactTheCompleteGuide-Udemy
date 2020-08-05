const print = require('./print');

let numbers = [1, 2, 3, 4];
let newNumbers = [ ...numbers ];

print('Before');
console.log('numbers = ', numbers);
console.log('newNumbers = ', newNumbers);

newNumbers[2] = 5;

print('After');
console.log('numbers = ', numbers);
console.log('newNumbers = ', newNumbers);