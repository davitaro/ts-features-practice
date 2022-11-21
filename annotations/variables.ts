let apples: number = 5;

let speed: string = "fast";

let hasName: boolean = true;

let nothingMuch: null = null;

let nothing: undefined = undefined;

//built-in objects
let now: Date = new Date();

//arrays
let colors: string[] = ["red", "green", "blue"];

let myNumbers: number[] = [1, 2, 3, 4];

//class
class ACar {}
let myCar: ACar = new ACar();

//object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//when to use type annotations

// 1) Function that returns "any" type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

//2) delayed initialization
let words = ["red", "green", "blue"];
let foundWord = false;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

//3) when inference doesn't work
let numbers = [-10, -2, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
