const reverseText = function (text) {
    if (text === '') return '';
    return reverseText(text.substr(1)) + text[0];
}

console.log(reverseText("Özyinelemeli fonksiyonları öğreniyorum."));
// .muroyinerğö ıralnoyisknof ilemeleniyzÖ