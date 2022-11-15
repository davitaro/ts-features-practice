const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

//Type Alias
type Drink = [string, boolean, number];

const pepsi: [string, boolean, number] = ["brown", true, 40];

const coke: Drink = ["brown", true, 40];

//not so useful
const carSpecs: [number, number] = [400, 3343];
const carSpecz = {
  horsepower: 400,
  weight: 3343,
};
