const UPDATE_INTERVAL_MILLIS = 1000;

class Elevator {
  constructor(){
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction = "up";
    this.updateIntervalId = undefined;
  }

  start() {
    if (!this.updateIntervalId) {
      this.updateIntervalId = setInterval(() => {
        this.update();
      }, UPDATE_INTERVAL_MILLIS);
    }
  }

  stop() { 
    clearInterval(this.updateIntervalId);
  }
  
  update() {
    this.log();
  }
  _passengersEnter() { }
  _passengersLeave() { }
  floorUp() { }
  floorDown() { }
  call() { }

  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;
