// 1-100 arası rastgele sayı üret
const randomNumber = (maxNumber) => {
    return Math.floor(Math.random() * maxNumber) + 1;
}

// Artan sıralama
const arrayASC = (array) => {
    return array.sort( (a, b) => {
        return a - b;
    });
}

// Azalan sıralama
const arrayDESC = (array) => {
    return array.sort( (a, b) => {
        return b - a;
    });
}

export { randomNumber, arrayASC, arrayDESC };