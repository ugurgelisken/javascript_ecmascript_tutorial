let text = "JavaScript çok güzel bir dil.";

// "JavaScript" ve parantez içinde "Script" ile ikili arama yapılıyor.
let result = text.match(/Java(Script)/);


console.log( JSON.stringify( result )); // ["JavaScript","Script"] Array döndü.
console.log( result[0] ); // JavaScript (tam eşleşme)
console.log( result[1] ); // Script (İlk eşleşen grup)
console.log( result.length ); // 2 adet eşleşme var.

// Girdi değeri input ile alınır.
console.log( result.input );  // JavaScript çok güzel bir dil.