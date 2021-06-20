// Sayfa ismi ve adresi parametre olarak alınıyor.
function goTo(page, url) {
    // Uyarı kutusu çıkarılıyor.
    if (confirm("Sayfadan çıkılacak. " + page + " sayfasına gidilmesini onaylıyor musunuz?")) {
        // Eğer Tamam'a tıklanırsa...
        // 1 saniye sonra URL yönlendiriliyor.
        setTimeout(function(){
            window.location.href = url;
        }, 1000);
    // Eğer İptal'e tıklanırsa...
    } else {
        // Uyarı olarak sayfada kaldığını söylüyoruz.
        alert("Sayfada kalındı.");
    }
}