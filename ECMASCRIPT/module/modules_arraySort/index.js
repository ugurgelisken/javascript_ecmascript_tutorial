import { randomNumber, arrayASC, arrayDESC }
    from './modules/arraySort.js';

const random10Numbers = [];


for (let i = 0; i <= 10; i++) {
    random10Numbers.push(randomNumber(100));
}

console.log("Rastgele sayılar :", random10Numbers );

console.log("Artan sayılar :", arrayASC(random10Numbers) );

console.log("Azalan sayılar :", arrayDESC(random10Numbers) );