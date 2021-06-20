function checkTextEndsWith(text, search){
    return text.endsWith(search);
}

console.log(checkTextEndsWith("JavaScript çok güzel dil.", ".")); // true
console.log(checkTextEndsWith("JavaScript çok güzel dil.", "dil.")); // true
console.log(checkTextEndsWith("JavaScript çok güzel dil.", "Dil.")) ;// false
console.log(checkTextEndsWith("JavaScript çok güzel dil.", ".")); // true