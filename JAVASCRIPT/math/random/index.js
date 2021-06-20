
// 0 - 100 arası tamsayı verir.
function getRandomNumber(maxValue) {
    return Math.floor(Math.random() * Math.floor(maxValue));
}

console.log(getRandomNumber(100)); // 54
console.log(getRandomNumber(100)); // 80
console.log(getRandomNumber(100)); //45

console.log(getRandomNumber(1)); // 0
// Sadece 0

console.log(Math.random()); // 0.18111997404791502
// 0 ve 1 arası kesirli sayı verir.