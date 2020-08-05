const generateNumbers = require('./generateNumbers');

const numbers = generateNumbers();
const [ num1, num2, num3 ] = numbers;
console.log('num1 = ', num1);
console.log('num2 = ', num2);
console.log('num3 = ', num3);

const checkIfEvenOrOdd = (...args) => {
    return args.map(x => [ x,  x % 2 === 0 ? 'even' : 'odd']);
}

console.log(checkIfEvenOrOdd(num1, num2, num3));