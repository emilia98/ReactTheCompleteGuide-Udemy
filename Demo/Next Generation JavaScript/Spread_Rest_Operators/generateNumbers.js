const generateNumbers = () => {
    const array = [];

    while(array.length < 3) {
        array.push(Math.ceil(Math.random() * 100))
    }

    return array;
}

module.exports = generateNumbers;