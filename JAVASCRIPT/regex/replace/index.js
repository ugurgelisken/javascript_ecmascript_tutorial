let text = "JavaScript çok güzel bir dil. Bu kitapla da javascript öğreniyorum.";

function replaceTXT(str, findPattern, replaceTXTText){
    return str.replace( findPattern, replaceTXTText );
}
 
console.log( replaceTXT(text, /güzel/i, "harika" ) ); 
// JavaScript çok harika bir dil. Bu kitapla da javascript öğreniyorum.

console.log( replaceTXT(text, /JavaScript/ig, "JS" ) ); 
// JS çok güzel bir dil. Bu kitapla da JS öğreniyorum.

console.log( replaceTXT(text, /javaScript/ig, "JavaScript") ); 
// JavaScript çok güzel bir dil. Bu kitapla da JavaScript öğreniyorum.


let text_1 = "JavaScript, html ve css ile birlikte kullanılır.".replace(/html|css/gi, function(str){
    return str.toUpperCase();
});

console.log(text_1); 
// JavaScript, HTML ve CSS ile birlikte kullanılır.