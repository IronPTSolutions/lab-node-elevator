const constants = require('./constants.js');
const Person = require('./person.js');

class Elevator {
  constructor(){
    this.floor = 0;
    this.direction = constants.UP;
    this.updateIntervalId = undefined;

    this.waitingList = [];
    this.passengers = [];
    this.requests = [];    
  }

  start() {
    if (!this.updateIntervalId) {
      this.updateIntervalId = setInterval(() => {
        this.update();
      }, constants.ELEVATOR_UPDATE_INTERVAL_MILLIS);
    }
  }

  stop() { 
    clearInterval(this.updateIntervalId);
  }
  
  update() {
    this.log();
    this._passengersLeave();
    this._passengersEnter();
    
    if (this.requests && this.requests[0] > this.floor) {
      this.floorUp();
    } else {
      this.floorDown();
    }
  }

  _passengersEnter() {
    let cleanedWaitingList = [];

    for (let passenger of this.waitingList) {
      if (passenger.originFloor === this.floor) {
        this.passengers.push(passenger);
        this.requests.push(passenger.destinationFloor);
        console.log(`${passenger.name} has enter the elevator`);
      } else {
        cleanedWaitingList.push(passenger);
      }
    }

    this.waitingList = cleanedWaitingList;
    this.requests = this.requests.filter(r => r !== this.floor);
  }
  
  _passengersLeave() {
    this.passengers = this.passengers.filter(p => {
      if (p.destinationFloor === this.floor) {
        console.log(`${p.name} has left the elevator`);
      }
      return p.destinationFloor !== this.floor
    });
  }

  floorUp() {
    if (this.floor < constants.ELEVATOR_MAX_FLOOR) {
      this.direction = constants.UP;
      this.floor++;
    }
  }

  floorDown() {
    if (this.floor > 0) {
      this.direction = constants.DOWN;
      this.floor--;
    }
  }

  call(person) {
    if (person instanceof Person) {
      this.waitingList.push(person);
      this.requests.push(person.originFloor);
    }
  }

  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor} | Requests: ${this.requests}`);
  }
}

module.exports = Elevator;
