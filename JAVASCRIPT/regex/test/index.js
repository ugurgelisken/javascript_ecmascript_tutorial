// Doğru formatlar:
// 05115123456
// 0511 123 45 67
// 0511 1234567
// 0511 123 4567

const phoneNumberRegExp = /^(05)([0-9]{2})\s?([0-9]{3})\s?([0-9]{2})\s?([0-9]{2})$/;

const output = document.getElementById("phoneNumberResult");

function checkPhonenNumber(number) {
    if (phoneNumberRegExp.test(number.value) === true) {
        output.innerHTML = "Telefon numarası doğru: " + number.value;
    } else {
        output.innerHTML = "Telefon numarası yanlış: " + number.value;
    }
}