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

// Başlıkların büyük küçük dönüşümlerini tutan mantıksal değişken
var isTitleUpperCase = false;

// Element sıralamaları sol-üst'ten sağ-alta doğru sayılır.
// 0. index'teki buton => Değiştir
// 1. index'teki buton => Stil 1
// 2. index'teki buton => Stil 2
// [1] ile index numarasını vererek hedefliyoruz.

document.getElementsByTagName("button")[1].onclick = function(){

     console.log("Stil 1 butonu tıklandı");

     // Etiket isimleriyle başlıklar alınıyor.
     var h1Titles = document.getElementsByTagName("h1");
     var h2Titles = document.getElementsByTagName("h2");

     // h1 başlığı dönüşümü
     for(let i = 0; i < h1Titles.length; i++){
          if(isTitleUpperCase === true){
               h1Titles[i].innerText = h1Titles[i].innerText.toLocaleUpperCase();
          }else{
               h1Titles[i].innerText = h1Titles[i].innerText.toLocaleLowerCase();
          }
     }

     // h2 başlığı dönüşümü
     for(let i = 0; i < h2Titles.length; i++){
          if(isTitleUpperCase === true){
               h2Titles[i].innerText = h2Titles[i].innerText.toLocaleUpperCase();
          }else{
               h2Titles[i].innerText = h2Titles[i].innerText.toLocaleLowerCase();
          }
     }

     // Her tıklamada durum tersine çevriliyor.
     isTitleUpperCase = !isTitleUpperCase;

}