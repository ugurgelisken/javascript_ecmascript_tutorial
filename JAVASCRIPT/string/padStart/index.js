const email = "abcdefg@gmail.com";

const beginDigitLimit = 2 
const endDigitLimit = 6;

const constEmailBegin2Digit = email.slice(0, beginDigitLimit); 
// İlk 2 karakter kırpılır

const constEmailLast4Digit = email.substr(email.length - endDigitLimit);
// Son 4 karakter kırpılır

const maskedEmail = constEmailBegin2Digit + constEmailLast4Digit.padStart(email.length - beginDigitLimit , '*');

console.log(email); //abcdefg@gmail.com
console.log(maskedEmail); // ab********ail.com