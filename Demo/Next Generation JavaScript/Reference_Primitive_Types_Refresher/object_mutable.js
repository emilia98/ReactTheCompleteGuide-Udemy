const print = require('./print');

// Mutable objects
let person = {
    name: 'Emilia'
};
let newPerson = person;

print('Before');
console.log('person = ', person);
console.log('newPerson = ', newPerson);

person.name = 'Emi';

print('After');
console.log('person = ', person);
console.log('newPerson = ', newPerson);