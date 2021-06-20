// Pencere boyutları değiştiğinde ölçüleri yazdırılıyor.
window.onresize = function () {
     console.log(window.pageXOffset, window.pageYOffset);
     console.log(window.screenLeft, window.screenTop);
     console.log(window.screenX, window.screenY);
}

/* Sayfa yüklendiğinde çağrılacak fonksiyon.
   .addEventListener ile olay yöneticiler nesnelere tanımlanıyor. */
function pageLoaded() {

     console.log("Sayfa yüklendi");

     // Kapat butonuna olay yöneticisi ve işlem yapacağı fonksiyon tanımlanıyor.
     document.getElementById("btnClosePage").addEventListener("click", function () {
          var areYouSureToExit = confirm("Sayfadan çıkmak istediğinize emin misiniz?");
          if (areYouSureToExit) {
               window.close();
          }
     });

     // Resim Yükle butonuna olay yöneticisi ve işlem yapacağı fonksiyon tanımlanıyor.
     document.getElementById("btnLoadImage").addEventListener("click", function () {
          var img = document.createElement('img');
          img.src = "animal.jpg";
          document.getElementById('imageArea').appendChild(img);
     });


     // Metin kutusunda klavyeden basılarak birşeyler girildiğinde...
     document.getElementById("customTextInput").addEventListener("keyup", function (e) {
          /* Klavyeden basılan tuş e parametresinin key değeri ile alınıyor. */
          console.log(e.key);
          /* Klavyeden her basılışta rastgele boyutlarda ve renklerde ekrana yazı yazdırılıyor. */
          let randomSize = Math.round(Math.random() * 80) + 100;
          let colors = ["blue", "red", "yellow", "pink", "green", "silver"];
          let randomColor = colors[Math.round(Math.random() * colors.length) - 1];
          document.getElementById("texts").innerHTML += "<font style='font-size:" + randomSize + "px;color:" + randomColor + "'>" + e.key + "</font>";
          /* e.target ile olayı meydana getiren nesne hedefleniyor. value değeri ile de metin kutusu içeriği "" ile sıfırlanıyor. */
          e.target.value = "";

     });

}

// Sayfadan çıkılırken öncesinde çağrılacak fonksiyon.
function pageUnloading() {
     var areYouSureToExit = confirm("Sayfadan çıkmak istediğinize emin misiniz?");
     if (areYouSureToExit) {
          // Çıkış öncesi yapılacak işler...
     }
}