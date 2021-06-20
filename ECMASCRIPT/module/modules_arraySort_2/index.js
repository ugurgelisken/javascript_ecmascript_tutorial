import * as arraySort from './modules/arraySort.js';

const random10Numbers = [];

for (let i = 0; i <= 10; i++) {
    random10Numbers.push(arraySort .randomNumber(100));
}

console.log("Rastgele sayılar :", random10Numbers );

console.log("Artan sayılar :", arraySort .arrayASC(random10Numbers) );

console.log("Azalan sayılar :", arraySort .arrayDESC(random10Numbers) );