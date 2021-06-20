import init, { 
    calculateFactorial as faktoryelHesapla, 
    factorialExample as faktoryelOrnegi
} from './modules/factorial.js';

init();

console.log("Örnek hesap (5!): ", faktoryelOrnegi);

console.log("10! çözümü: ", faktoryelHesapla(10));