const Elevator = require('./elevator.js');
const Person = require('./person.js');

let elevator = new Elevator();
elevator.start();

let people = [
    new Person('María', 0, 5),
    new Person('Pedro', 0, 3),
    new Person('Juan', 0, 1),
    new Person('Carlos', 1, 10),
    new Person('Lara', 5, 10),
    new Person('Julia', 5, 8)
]

for (let person of people) {
    elevator.call(person);
}
