const chance = require('chance').Chance();
const constants = require('./constants.js');

class Person {
  static build() {
    let gender = Math.random() > 0.5 ? constants.MALE : constants.FEMALE;
    let originFloor = Math.floor(Math.random() * constants.ELEVATOR_MAX_FLOOR);
    let destinationFloor = Math.floor(Math.random() * constants.ELEVATOR_MAX_FLOOR);
    
    return  new Person(chance.name({ gender: gender }), originFloor, destinationFloor);
  }

  constructor(name, originFloor, destinationFloor) {
    this.name = name;
    this.originFloor = originFloor;
    this.destinationFloor = destinationFloor;
  }

}

module.exports = Person;
