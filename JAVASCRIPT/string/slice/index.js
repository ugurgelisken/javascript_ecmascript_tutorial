var text = "JavaScript'i bu kitap ile öğreniyorum.";

console.log( text.slice(0) ); // JavaScript'i bu kitap ile öğreniyorum.
console.log( text.slice(0, 5) ); // JavaS
console.log( text.slice(0, -5) ); // JavaScript'i bu kitap ile öğreniy
console.log( text.slice(-10) ); // reniyorum.
console.log( text.slice(5, 5) ); // Boş karakter. Aynı noktadan kesiyor. 
console.log( text.slice(5, 6) ); // c 