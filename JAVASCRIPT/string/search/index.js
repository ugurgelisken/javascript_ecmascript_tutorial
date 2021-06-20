function searchInText(text, search, caseSensitive = true){
    if(caseSensitive == false){
        return text.toUpperCase().search(search.toUpperCase());
    }else{
        return text.search(search);
    }
}

var text = "JavaScript çok güzel dil.";

console.log(searchInText(text, "javascript", true)); // -1
console.log(searchInText(text, "javascript")); // -1
console.log(searchInText(text, "javascript", false)) ; // 0
console.log(searchInText(text, "GU", true)); // -1
console.log(searchInText(text, "gÜ", false)); // 15
console.log(searchInText(text, "gü", true)); // 15