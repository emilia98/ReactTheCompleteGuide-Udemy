const length = 5;

const generateNumbers = () => {
    const arr = [];

    for (i = 0; i < length; i++) {
        arr.push(Math.ceil(Math.random() * 100))
    }

    return arr;
}

module.exports = generateNumbers;
