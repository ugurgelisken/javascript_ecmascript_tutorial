let text = '<div><h1>JavaScript çok güzel bir dil.</h1></div>';

// HTML kapanış etiketleri aranacak.
// Yani düzenli ifade </ > olan bir şablon arayacak.
let regexp = /<\/(.*?)>/g;

let tags = text.matchAll(regexp);

tags = Array.from(tags);

console.log(tags);