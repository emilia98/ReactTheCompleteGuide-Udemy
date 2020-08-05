const generateNumbers = require('./generateNumbers');

const numbers = generateNumbers();
console.log(numbers);

const evenNumbers = numbers.filter(x => x % 2 == 0);
console.log('Even Numbers: ', evenNumbers);

console.log('-'.repeat(12));

const oddNumbers = numbers.filter(x => x % 2 == 1);
console.log('Odd Numbers: ', oddNumbers);