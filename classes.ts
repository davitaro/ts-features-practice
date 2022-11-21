class Vehicle {
  protected honk(): void {
    console.log(`bEeP bEeP`);
  }
}

class Car extends Vehicle {
  private drive(): void {
    console.log(`vRoOm VrOoM`);
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car();
car.startDrivingProcess();
