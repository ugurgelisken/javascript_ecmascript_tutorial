const numberDirection = function(number){

    var isNumber = typeof Number(number) === "number" ? true : false;

    switch (number, isNumber) {
        case isNumber === true && number < 0: 
            return number + " sayısı negatif.";
            break;
        case isNumber === true && number > 0: 
            return number + " sayısı pozitif.";
            break;
        case isNumber === true && number === 0: 
            return  number + " sayısı nötr.";
            break;
       default: 
            return "Girilen değer ('" + number + "') sayı değil. Girilen değer formatı: " + typeof number;
            break;
    }
}

console.log( numberDirection(5) ); // 5 sayısı nötr.
console.log( numberDirection(0) ); // 0 sayısı nötr.
console.log( numberDirection(-41.2) ); // -41.2 sayısı nötr.
console.log( numberDirection("ABC") ); // Girilen değer ('ABC') sayı değil. Girilen değer formatı: string