const generateNumbers = require('./generateNumbers');

const numbers = generateNumbers();
console.log(numbers);

console.log('-'.repeat(12));

const doubledNumbers = numbers.map(x => x * 2);
console.log(doubledNumbers);