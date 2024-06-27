class Vehicle {
  constructor(protected wheelCount: number) {
    this.wheelCount = wheelCount;
  }
  showNumberOfWheels() {
    console.log(`moved ${this.wheelCount}`);
  }
}

class Motorcycle extends Vehicle {
  constructor() {
    super(2);
  }
  updateWheelCount(newWheelCount: number) {
    this.wheelCount = newWheelCount;
  }
}

class Autocycle extends Vehicle {
  constructor() {
    super(4);
  }
}

const motocycle = new Motorcycle();
motocycle.showNumberOfWheels();
motocycle.updateWheelCount(100);
console.log("updated data", motocycle.showNumberOfWheels());
const autocycle = new Autocycle();
autocycle.showNumberOfWheels();
