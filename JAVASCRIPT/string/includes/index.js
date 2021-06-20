function isIncludesInText(text, search, caseSensitive = true){
    if(caseSensitive == false){
        return text.toUpperCase().includes(search.toUpperCase());
    }else{
        return text.includes(search);
    }
}

var text = "JavaScript çok güzel dil.";

console.log(isIncludesInText(text, "javascript", true)); // false
console.log(isIncludesInText(text, "javascript")); // false
console.log(isIncludesInText(text, "javascript", false)) ;// true
console.log(isIncludesInText(text, "GU", true)); // false
console.log(isIncludesInText(text, "gÜ", false)); // true
console.log(isIncludesInText(text, "gü", true)); // true