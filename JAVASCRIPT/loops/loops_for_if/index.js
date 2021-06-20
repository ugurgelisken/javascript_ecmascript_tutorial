
// 6*4 matrisli dizi oluşturuluyor.
// 3x2 koordinatına, yani [1,2] indexine 1 değeri veriliyor
// 1 olan değerde hayvan figirü gösterilecek
const map = [
   [0,0,0,0,0,0],
   [0,0,1,0,0,0],
   [0,0,0,0,0,0],
   [0,0,0,0,0,0]
];

// Hedef div id'si ile tanımlanıyor.
const MAP_AREA = document.getElementById("map_area");

/* div'in genişliği map Array'inin 0. index'inin genişliği, yani, 6 * 50px ile ölçülendiriliyor */
MAP_AREA.style.width = map[0].length * 50 + "px";;

/* Haritada boş alanalr ve hayvan figürü ile dolu alanlar HTML olarak tanımlanıyor */
var emptyArea = "<div style='outline:1px solid silver; width:50px; height:50px; background-color:white'></div>";
var fullArea = "<div style='outline:1px solid silver; width:50px; height:50px; background-color:green'>🐏</div>";

// X ekseninde 6 kutu olacak değeri alınıyor.
var x = map.length;
// Y ekseninde 4 kutu olacak değeri alınıyor.
var y = map[0].length;

// Toplamda ise 6*4 = 24 kutu var.
// Ancak sıralama 0'dan başladığı için 1 çıkarıyoruz.
// Bu değeri for döngüsünde limit olarak kullanacağız.
// Döngü 23 değeri üzerinden olacak.
var total = (y * x) - 1;

/* Dizi içinde X ve Y koordinatlarını aşağıdaki değişkenlerde saklıyoruz.
İlk başladığında 0,0 koordinatında olacak.
Döngü ile koordinatı önce soldan sağa, sonra yukarıdan aşağıya olacak şekilde ilerleteceğiz.
 Her seferinde de değer 1 mi diye bakıp, 1 ise hayvan figürlü olan fullArea değişkeni ile kutu çizeceğiz. */
var indexX = 0;
var indexY = 0;

// Döngünün başlangıç değeri i = 0;
// i değeri total değerine küçük veya eşitse...
// Her artırımda i değerini ve indexX değerini artırıyoruz.
for(let i = 0; i <= total; i++, indexX++){

   // Eğer indexX değeri x+1 değerinden büyükse 0'lıyoruz.
   // Aynı daktilo sonuna geldiğinde başa itelediğimiz gibi..
   if(indexX > x+1){
      indexX = 0;
      // indexY değeri ile de bir alt satıra geçiyoruz.
      indexY++;
   }
 
   // Konsolda değerleri görüp kontrol edebilirsiniz.
   console.log(i, indexY, indexX);

   // Eğer değer 1'se fullArea,
   // Değilse emptyAre değişkenleri div'e ekleniyor.
   if(map[indexY][indexX] === 1){
      MAP_AREA.innerHTML += fullArea;
   }else{
      MAP_AREA.innerHTML += emptyArea;
   }

}