var text = "JavaScript çok güzel bir dil.";

console.log( text.startsWith("Java") ); // true
console.log( text.startsWith("Java", 0) ); // true
console.log( text.startsWith("Java", 6) ); // false
console.log( text.startsWith("dil") ); // false