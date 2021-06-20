let text = 'Merhaba. Ben, javaScript öğreniyorum!';

let regexp = /\W/g; // Sözcük olmayan ilk karakter.

regexp.lastIndex = 10; 
/* 10. index'ten itibaren arama başlayacak. Yani r harfinden sonra. */

console.log( regexp.exec(text) );