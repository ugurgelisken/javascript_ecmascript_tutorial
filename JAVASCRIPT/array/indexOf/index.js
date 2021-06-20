let cars = [ "Toyota", "BMW", "Mercedes", "Audi", "Ferrari", "Ford" ];

function findInArray( search ){
    return cars.indexOf(search);
}

console.log( findInArray("Toyota") ); //0 
console.log( findInArray("Cadillac") ); // -1 
console.log( findInArray("Ferrari") ); // 4 