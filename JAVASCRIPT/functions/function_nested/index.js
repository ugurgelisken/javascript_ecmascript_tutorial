const encryptText = function ( text = ""){

    // Gelen metin olduğu gibi yazdırılıyor.
    console.log("Gelen metin: ", text);

    // Şifreleyen fonksiyon
    // Şifreleyip konsolda yazdırıyor ve geri döndürüyor
    function encrypt (text){
        console.log( "Şifrelenmiş hali: ", btoa(text) );
        return btoa(text);
    }

    // Şifreyi geri alan fonksiyon
    // Sadece konsolda yazdırıyor.
    function decrypt (text){
        console.log( "Çözülmüş hali: ", atob(text) );
    }

    // Değişkene, şifreleme fonksiyonundan gelen değer aktarılıyor.
    let cryptedText = encrypt (text);

    // Şifreyi geri alma fonksiyon çağrılıyor.
    decrypt(cryptedText);

}

// JavaScript metni üzerinde işlem yapılacak...
encryptText("JavaScript");