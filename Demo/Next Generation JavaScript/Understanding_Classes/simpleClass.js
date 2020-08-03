class Person {
    constructor() {
        this.name = 'Emilia';
    }

    printMyName() {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();