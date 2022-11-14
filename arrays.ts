const carMakers = ["ford", "chevy", "toyota"];
const carMakerz: string[] = [];

const dates = [new Date(), new Date()];

const carsByMake = [["f150", "silverado", "camry"]];
const carzByMake: string[][] = [];

//help with inference
const car = carMakers[0];
const myLastCar = carMakers.pop();

//prevent incompatible values
carMakers.push("seven");

//help with array functions
carMakers.map((car: string): string => `I love my ${car.toUpperCase}`);

//flexible types

const importantDates = [new Date(), "2030-10-10"];
const importantDatez: (Date | string)[] = [new Date()];
