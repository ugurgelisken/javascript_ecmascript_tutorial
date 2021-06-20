let numbers = [];

numbers.push(1); // Number

numbers.push("2"); // String

numbers.push({
    number: 3,
    text: "Üç"
}); // Object

numbers.push([
    4, 5, 6
]); // Array

numbers.push([
    [4, 5, 6],
    ["Dört", "Beş", "Altı"]
]); // 2D Array

// Array'i String olarak yazdırıyoruz.
console.log( numbers );



numbers.pop(); // En son eklenen 2D Array silindi.
numbers.pop(); // Şimdi de tek boyutlu Array silindi.
numbers.pop(); // Şimdi de Object olarak eklenen veri silindi.

console.log( numbers );