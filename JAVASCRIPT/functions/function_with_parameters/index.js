/* Sırasıyla Date nesnesi, mesaj metni ve tarih/saat olarak 1/0 değerleri alınıyor */
const getTime = function (date, text, type){

    /* Eğer parametre olarak date gelmişsa currentDate'e aktarıyoruz, gelmemişsa || operatörü ile yeni Date nesnesi oluşturup atıyoruz. */ 
    let currentDate = date || new Date();

    /* Eğer text değeri parametre olarak gelmşse currentText değişkenine atıyoruz, gelmemişse varsayıla nolarak "Merhaba. Şu an: " metnini atıyoruz. */
    let currentText = text || "Merhaba. Şu an: ";

    // Sayfada yazdıracağımız mesajın boş tanımlanaması...
    let message = "";

    /* Eğer gelen type parametresi 1 ise zamanı göstereceğiz. */
    if(type === 1){
       /* message değişkenini metin ve sistem saat bilgisi ile birleştirip tanımlıyoruz. */
        message = currentText + currentDate.toLocaleTimeString();        
    } else{
        // Eğer 1 dışında bir değerse tarihh bilgisi ile mesajı birleştiriyoruz. */
        message = currentText + currentDate.toLocaleDateString();
    }

    /* += operatörü ile sürekli ekleyerek <body> etiketine <div> içinde mesajımızı yazıyoruz */
    document.body.innerHTML += "<div>" + message + "</div>";

}

//  Her 3 parametre de veriliyor.
getTime(new Date(), "Tarih: ", 0);

// 2. parametre boş veriliyor. null boş demektir.
getTime(new Date(), null, 1);

// Değişken oluşturulup, bu değişken parametreye ekleniyor.
var date = new Date();
getTime(date, "Şimdi: ", 1);

// Hiçbir parametre olmadan çağırılıyor.
getTime();