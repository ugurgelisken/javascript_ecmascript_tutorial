console.log(typeof 124);
// number

console.log(typeof "abc");
// string

console.log(typeof true);
// boolean

var check = false;
console.log(typeof check);
// boolean

console.log(typeof test);
// undefined

var cars = ["Ford", "Renault", "BMW"];
console.log(typeof cars);
// object

var carData = {
    titles: ["Model", "Plaka", "Hız"],
    cars: [
        {
            name: "Ford",
            plate: "34 ABC 1900",
            speed: 180
        }
    ]
};

console.log(typeof carData);
// object