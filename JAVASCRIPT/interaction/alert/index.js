"use strict";

// 0-1000 arası rastgele sayı üretilip metin kutusunda gösteriliyor.
function generatePassword(){
    document.getElementById("password").value = Math.round(Math.random()*1000);
}
generatePassword();

// Kontrol Et butonuna tıklandığında
function checkPassword (){
    // Metin kutuları değerleri değişkenlere alınıyor.
    var confirmValue = document.getElementById("confirmText").value;
    var password = document.getElementById("password").value;

    // İki değer karşılaştırması yapılıyor ve uyarı kutuları gösteriliyor.
    if(confirmValue === password){
        alert("Parola doğru");
    }else{
        alert("Parola yanlış");
        generatePassword();
    }

    // Her tıklama ile değerler sıfırlanıyor.
    document.getElementById("confirmText").value = "";
    confirmValue = null;

}