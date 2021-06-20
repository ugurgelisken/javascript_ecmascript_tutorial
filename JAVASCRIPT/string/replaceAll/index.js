function findAndReplace(orjText, regex, replaceText){
    return orjText.replaceAll(regex, replaceText);
}

console.log( findAndReplace("Bana 1 kilo elma 1 kilo da kiraz lütfen", "/1/gi", "bir") );
// Bana bir kilo elma bir kilo da kiraz lütfen