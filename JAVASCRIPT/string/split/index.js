var text = "JavaScript çok kolay ve güçlü bir dil.";

// Kelimelere ayrılıyor
var textWords = text.split(" ");

// Kelimeler Array'den tek tek yazdırılıyor.
for(const word of textWords){
    console.log(word);
}

// JavaScript
// çok
// kolay
// ve
// güçlü
// bir
// dil.

// , işaretine göre ayrılıyor.
var list = "Elma,Armut,Muz,Şeftali";
var fruits = list.split(",");

// Array'in 0. elemanı yazdırılıyor.
console.log(fruits[0]) // Elma