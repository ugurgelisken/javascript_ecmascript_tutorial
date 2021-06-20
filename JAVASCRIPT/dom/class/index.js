/* Değiştir butonuna tıkladıkça paragraf metinleri yer değişecek.
O an metinlerin konumunu saklamak için de isTruePlace adlı Boolean değişkende durumu saklıyoruz. */

var isTruePlace = false;

// btnChangeText id'li nesne tıklandığında...
document.getElementById("btnChangeText").onclick = function () {

     /* id'si content_1 ve content_2 olan nesnelerdeki metinleri innerHTML ile alıp değişkenlere aktarıyoruz. */
     var mainText = document.getElementById("content_1").innerHTML;
     var footerText = document.getElementById("content_2").innerHTML;

     /* Eğer metinler doğru konumdalarsa...
     Aldığımız metinleri birbiri ile yer değiştiriyoruz. */
     if (isTruePlace === true) {
          document.getElementById("content_1").innerHTML = mainText;
          document.getElementById("content_2").innerHTML = footerText;
     } else {
          document.getElementById("content_1").innerHTML = footerText;
          document.getElementById("content_2").innerHTML = mainText;
     }

     /* Her tıklamada durumu tekrar değiştiriyoruz. Böylece her tıklamada metin konumları ters çevriliyor. */
     isTruePlace = !isTruePlace;

     // Class ismi text olan nesneler alınıyor ve yazdırılıyor.
     let allParagraphTexts = document.getElementsByClassName("text");
     console.log(allParagraphTexts);

     for (let text of allParagraphTexts) {
          console.log(text);
     }


}