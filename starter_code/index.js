const constants = require('./constants.js');
const Elevator = require('./elevator.js');
const Person = require('./person.js');

let elevator = new Elevator();
elevator.start();

let intervalId = setInterval(() => {
    elevator.call(Person.build());
    
    if (elevator.requests.length > 10) {
        clearInterval(intervalId);
    }
}, constants.ADD_PERSON_INTERVAL_MILLIS);
