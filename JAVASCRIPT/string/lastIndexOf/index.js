var url = "http://www.google.com.tr";

findLastDot = url.lastIndexOf(".");

// Eğer URL uzunluğundan en az 2 karakter gerideyse...
if(findLastDot <= url.length - 2){
    // . ile bölündüğünde en az 3 parça varsa.
    // com, com.tr, www. gibi bölünmeler olur.
    // Örnekte; https://www, google, com, tr olarak bölünür.
    if(url.split(".").length >= 3){
        console.log("URL geçerli olabilir");
    }
}
