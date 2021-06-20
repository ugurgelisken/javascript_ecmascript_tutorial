var cars = ["Ford", "Renault", "BMW"];

console.log(cars); // ["Ford", "Renault", "BMW"]
console.log(cars.length) // 3

console.log(cars[0]); // Ford
console.log(cars[1]); // Renault
console.log(cars[2]); // BMW

cars.push("Audi"); // Audi marka araba modeli eklendi

console.log(cars); //  ["Ford", "Renault", "BMW", "Audi"]
console.log(cars.length) // 4


var carData = ["34 ABC 1900", "34 XYZ 1040", "24 UG 1983", ["Ford", "Renault", "BMW"], [180, 200, 220]];
console.log(carData)

var table = [
    ["Model", "Plaka", "Hız"],
    ["Ford", "34 ABC 1900", 180],
    ["Renault", "34 XYZ 1040", 200],
    ["BMW", "24 UG 1983", 220],
];

console.log(table);

console.table(table);