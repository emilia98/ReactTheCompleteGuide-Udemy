const person = {
    name: 'Emilia',
    nickname: 'emilia98'
};
console.log('Before: ', person);

const person2 = {
    ...person,
    country: 'Bulgaria'
}
console.log('After: ', person2);