const Elevator = require('./elevator.js');
const Person = require('./person.js');

let elevator = new Elevator();
elevator.start();
setTimeout(elevator.stop.bind(elevator), 2000);