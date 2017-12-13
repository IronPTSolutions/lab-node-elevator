const Elevator = require('./elevator.js');
const Person = require('./person.js');

let elevator = new Elevator();
elevator.start();

setInterval(() => {
    if (Math.random() > 0.5) {
        elevator.floorUp();
    } else {
        elevator.floorDown();
    }
}, 2000);