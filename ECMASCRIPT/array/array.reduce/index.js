let numbers = [1,2,3,6,10,0,6];
/*
let total = 0;

for(let i = 0; i < numbers.length; i++){
    total += numbers[i];
}

console.log(total);
*/

let total = numbers.reduce( (a, b) => { return a + b; }, 0);
console.log("Toplam :", total)