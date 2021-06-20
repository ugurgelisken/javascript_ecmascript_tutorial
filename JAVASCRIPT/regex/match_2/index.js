let text = "JavaScript çok güzel bir dil.";

// Global olarak bütün halinde aranıyor.
let result = text.match(/Java(Script)/g);

console.log ( result ); // ["JavaScript"]
console.log( result[0] ); // JavaScript
console.log( result.length ); // 1