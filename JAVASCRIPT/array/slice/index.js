let numbers = ["A","B","C","D","E","F","H"];

let test_1 = numbers.slice(1);
let test_2 = numbers.slice(2, 2);
let test_3 = numbers.slice(2, 6);
let test_4 = numbers.slice(-1);
let test_5 = numbers.slice(-3);
let test_6 = numbers.slice(0, 1);

console.log(test_1);
// B, C, D, E, F, G, H

console.log(test_2);
// Boş. 2'den 2'ye kesit olmaz.

console.log(test_3);
// C, D, E, F

console.log(test_4);
// H

console.log(test_5);
// E, F, H

console.log(test_6);
// A