let box = "#";
box.repeat(5);
console.log(box); // #####
console.log("#".repeat(10)); // ##########


const password = "    a12345S   ";

console.log(password); // "    a12345S   ";

console.log(password.trimStart()); // "a12345S   ";

console.log(password.trimEnd()); // "a12345S";


let paragraph = "Ne Mutlu Türküm Diyene!";

// Başlangıç kontrolleri...
console.log( paragraph.startsWith("N") ) // true
console.log( paragraph.startsWith("Ne") ) // true
console.log( paragraph.startsWith("Kutlu") ) // false

// Bitiş kontrolleri...
console.log( paragraph.endsWith("e") ) // false
console.log( paragraph.endsWith("üm") ) // false
console.log( paragraph.endsWith("ümüz") ) // false

// İçeriyor mu kontrolleri
console.log( paragraph.includes("!") ) // true
console.log( paragraph.includes(" ") ) // true
console.log( paragraph.includes("Kutlu") ) // false
console.log( paragraph.includes("MUTLU") ) // false

// Belirtilen pozisyondan itibaren içeriyor mu kontrolleri
console.log( paragraph.includes("Türk", 4) ) // true
console.log( paragraph.includes("Türk", 14) ) // false
