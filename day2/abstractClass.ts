namespace AbstractNamespace {
  abstract class Vehicle {
    constructor(protected wheelCount: number) {}
    abstract updateWheelCount(newWheelCount: number): void;
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
    updateWheelCount(newWheelCount: number): void {
      this.wheelCount = newWheelCount;
      console.log(`Automobile has ${this.wheelCount}`);
    }
    showNumberOfWheels() {
      console.log(`moved Automobile ${this.wheelCount}`);
    } // 오버라이딩?
  }

  const motocycle = new Motorcycle();
  motocycle.showNumberOfWheels();
  motocycle.updateWheelCount(100);
  console.log("updated data", motocycle.showNumberOfWheels());
  const autocycle = new Autocycle();
  autocycle.showNumberOfWheels();
}
