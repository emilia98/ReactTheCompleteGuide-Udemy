const printMessage = () => {
    console.log('Hello');
}

const printSeparator = () => {
    console.log('-'.repeat(12));
}

const printMyName = name => {
    console.log(name);
}

const printMyNameAndAge = (name, age) => {
    console.log(name, age);
}

const doubleNum = number => number * 2;

printMessage();
printSeparator();

printMyName('Emilia');
printSeparator();

printMyNameAndAge('Emilia', 22);
printSeparator();

console.log(doubleNum(12));
printSeparator();