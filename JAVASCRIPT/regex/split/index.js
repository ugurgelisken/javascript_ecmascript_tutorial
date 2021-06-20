let numbers = '1-2-3-5-10';

let number_array = numbers.split('-'); 
// [1, 2, 3, 5, 10];

let number_array_with_regexp = numbers.split(/-\s*/); 
// [1, 2, 3, 5, 10];

console.log(number_array);
console.log(number_array_with_regexp);

