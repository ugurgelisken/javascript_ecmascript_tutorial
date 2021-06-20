function findAndReplace(orjText, findText, replaceText){
    return orjText.replace(findText, replaceText);
}

console.log( findAndReplace("A00 numaralı oda 1. katta", "1.", "birinci") );
// A00 numaralı oda birinci katta

console.log( findAndReplace("Bana 1 kilo elma 1 kilo da kiraz lütfen", "1", "bir") );
// Bana bir kilo elma 1 kilo da kiraz lütfen