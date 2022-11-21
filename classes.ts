class Vehicle {
  constructor(public color: string) {}
  protected honk(): void {
    console.log(`bEeP bEeP`);
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log(`vRoOm VrOoM`);
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(3, "silver");
car.startDrivingProcess();
