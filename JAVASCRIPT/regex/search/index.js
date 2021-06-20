let text = "JavaScript çok güzel bir dil. Bu kitapla da JavaScript öğreniyorum.";

function find(str, pattern){
    return str.search( pattern );
}
 
console.log( find(text, /bir/i ) ); // 21
console.log( find(text, /javascript/i ) ); // 0
console.log( find(text, /java/i ) ); // 0
console.log( find(text, /js/i ) ); // -1