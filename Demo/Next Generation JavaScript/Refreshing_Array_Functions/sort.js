const generateNumbers = require('./generateNumbers');

const numbers = generateNumbers();
console.log(numbers);

console.log('-'.repeat(20));

// Immutable sorting

// Sort Ascending Order
const sortAsc = [...numbers].sort();

console.log('Ascending order: ', sortAsc);
console.log(numbers);

// Sort Descending Order
const sortDesc = [...numbers].sort((a, b) => a > b ? -1 : 1);

console.log('Descending order: ', sortDesc);
console.log(numbers);

console.log('-'.repeat(20));

// Mutable sorting
console.log('Ascending order: ', numbers.sort());
console.log(numbers);
console.log('Descending order: ', numbers.sort((a, b) => a > b ? -1 : 1));
console.log(numbers);