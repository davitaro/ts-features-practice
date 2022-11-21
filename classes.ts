class Vehicle {
  drive(): void {
    console.log(`Chugga chugga`);
  }

  honk(): void {
    console.log(`bEeP bEeP`);
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log(`vRoOm VrOoM`);
  }
}

const car = new Car();
car.drive();
car.honk();
