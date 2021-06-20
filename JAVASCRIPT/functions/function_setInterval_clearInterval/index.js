// Başlangıç ve artırılan değer.
var begin = 0;

// Mesajı div'de gösteren fonksiyon.
function showTime(value){
    document.getElementById("counterTxt").innerHTML = "<h1>"+ value + "</h1>";
}

// Sayfa ilk açıldığında 0 değerini gösteriyoruz.
showTime(begin);

// Başlat butonu tıklanınca çalıştırılacak fonksiyon.
function startCounter(){
    /* setInterval nesnesi counter adlı bir değişkene aktarılıyor. */
    // 1000 milisaniye periyotla çalıştırılacak
    counter = setInterval(function(){
        /* Değer sürekli 1 artırılıyor ve showTime fonksiyonuna parametre olarak veriliyor. */
        begin++;
        showTime(begin);
    }, 1000);
}


// Sıfırla butonuna tıklandığında çalıştırılacak fonksiyon.
function resetCounter() {
  // setInterval durduruluyor.
  clearInterval(counter);
  /* Başlangıç değeri 0 yapılıp başa çekiliyor ve mesaj olarak gösteriliyor. */
  begin = 0;
  showTime(begin);
}